import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { GroupOrderInfoService } from '../../../shared/services/api/group-order-info.service';
import { GroupOrderInfoViewModel } from '../../../shared/models/view/group-order-info.view-model';
import { QueryGroupOrderInfoParams } from '../../../shared/models/api/group-order-info.model';
import { AppDataService } from "../../../shared/services/auth/app-data.service";
import { OrderStatusEnum } from '../../../shared/enums/order-status.enum';
import { MatDialog } from "@angular/material/dialog";
import { DialogModule } from "@angular/cdk/dialog";
import {
  CompleteGroupOrderDialogComponent
} from "../complete-group-order-dialog/complete-group-order-dialog.component";
import { DatePipe, CommonModule } from '@angular/common';
import { BaseTableComponent } from '../../../shared/ui/base-table/base-table.component';
import { Observable, map } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-group-orders-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, DialogModule, DatePipe, MatPaginatorModule, CommonModule],
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
export class GroupOrdersTableComponent extends BaseTableComponent<GroupOrderInfoViewModel> {
  @Input() queryParams: QueryGroupOrderInfoParams;
  public readonly OrderStatusEnum = OrderStatusEnum;

  columnsToDisplay = ['time', 'host', 'amount', 'status', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: GroupOrderInfoViewModel | null;

  public currentUserId: number;
  protected _queryRequest: () => Observable<GroupOrderInfoViewModel[]>;

  constructor(
    private _groupOrderService: GroupOrderInfoService,
    private _appData: AppDataService,
    private _dialog: MatDialog
  ) {
    super();
    this._appData.currentUser$.subscribe(user => this.currentUserId = user.id);
    this._queryRequest = this._constructQueryRequest.bind(this);
  }

  private _constructQueryRequest(): Observable<GroupOrderInfoViewModel[]> {
    return this._groupOrderService.query(this.queryParams ?? {}).
    pipe(map(data => data.map(groupOrder => GroupOrderInfoViewModel.createFromApiModel(groupOrder))));
  }

  public complete(groupOrder: GroupOrderInfoViewModel): void {
    const dialog = this._dialog.open(CompleteGroupOrderDialogComponent, {
      data: groupOrder
    });

    dialog.afterClosed().subscribe(() => this.refresh());
  }
}
