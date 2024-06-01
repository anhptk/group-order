import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { GroupOrderInfoService } from '../../../shared/services/api/group-order-info.service';
import { GroupOrderInfoViewModel } from '../../../shared/models/view/group-order-info.view-model';
import { OrderInfoService } from '../../../shared/services/api/order-info.service';
import { QueryGroupOrderInfoParams } from '../../../shared/models/api/group-order-info.model';

@Component({
  selector: 'app-group-orders-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './group-orders-table.component.html',
  styleUrl: './group-orders-table.component.scss'
})
export class GroupOrdersTableComponent {
  @Input() queryParams: QueryGroupOrderInfoParams;
  
  dataSource: GroupOrderInfoViewModel[] = [];
  columnsToDisplay = ['time', 'host', 'amount', 'status', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: GroupOrderInfoViewModel | null;

  constructor(
    private _groupOrderService: GroupOrderInfoService,
    private _orserService: OrderInfoService
  ) {}

  ngOnInit() {
    this._loadData();
  }

  private _loadData() {
    this._groupOrderService.query(this.queryParams ?? {}).subscribe(data => {
      this.dataSource = data.map(groupOrder => GroupOrderInfoViewModel.createFromApiModel(groupOrder));
    });
  }

  public expandRow(row: GroupOrderInfoViewModel): void {
    if (!row.orders.length) {
      this._loadOrderItems(row);
    }
  }

  private _loadOrderItems(row: GroupOrderInfoViewModel): void {
    row.loading = true;

    this._orserService.query({group_order: row.id}).subscribe(data => {
      row.setOrders(data);
      row.loading = false;
    });
  }
}
