import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { QueryOrderInfoParams } from '../../../shared/models/api/order-info.model';
import { OrderInfoService } from '../../../shared/services/api/order-info.service';
import { map, Observable } from 'rxjs';
import { OrderInfoViewModel } from '../../../shared/models/view/order-info.view-model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule,  } from '@angular/material/paginator';
import { BaseTableComponent } from '../../../shared/ui/base-table/base-table.component';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [MatTableModule, MatProgressBarModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatTooltipModule, CommonModule, MatFormFieldModule, MatInputModule , MatSortModule, MatPaginatorModule],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent extends BaseTableComponent<OrderInfoViewModel> implements OnChanges {
  @Input() query: QueryOrderInfoParams;
  @Input() hideDate = false;
  @Input() hideFilter = false;
  @Output() selectedChange: EventEmitter<Set<number>> = new EventEmitter();
  @Output() copyOrder: EventEmitter<OrderInfoViewModel> = new EventEmitter();

  public displayedColumns: string[] = ['memberName', 'items', 'subtotal', 'status', 'actions'];

  public selectedRows: Set<number> = new Set();

  protected _queryRequest: () => Observable<OrderInfoViewModel[]>;

  constructor(
    private readonly _orderService: OrderInfoService
  ) {
    super();
    this._queryRequest = this._constructQueryRequest.bind(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hideDate']) {
      this._setupDisplayedColumns();
    }
  }

  private _setupDisplayedColumns(): void {
    if (this.hideDate) {
      this.displayedColumns = ['memberName', 'items', 'subtotal', 'status', 'actions'];
    } else {
      this.displayedColumns = ['createdAt', 'memberName', 'items', 'subtotal', 'status', 'actions'];
    }
  }

  private _constructQueryRequest(): Observable<OrderInfoViewModel[]> {
    return this._orderService.query(this.query)
      .pipe(map(orders => orders.map(order => OrderInfoViewModel.createFromApiModel(order))));
  }

  public deleteRow(id: number): void {
    this._orderService.delete(id)
      .subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(order => order.id !== id);
        this.selectRow(id, { checked: false } as MatCheckboxChange);
      });
  }

  public selectRow(id: number, change: MatCheckboxChange): void {
    if (change.checked) {
      this.selectedRows.add(id);
    } else {
      this.selectedRows.delete(id);
    }

    this.selectedChange.emit(this.selectedRows);
  }

  public copyRow(row: OrderInfoViewModel): void {
    this.copyOrder.emit(row);
  }

  public calculatePrice(): number {
    return this.dataSource.filteredData.reduce((total, order) => total + order.subtotal, 0);
  }

  public calculateQuantity(): number {
    return this.dataSource.filteredData.reduce((total, order) => total + order.totalCount, 0);
  }

}
