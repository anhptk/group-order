import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OrderInfo, QueryOrderInfoParams } from '../../../shared/models/api/order-info.model';
import { OrderInfoService } from '../../../shared/services/api/order-info.service';
import { finalize, map } from 'rxjs';
import { OrderInfoViewModel } from '../../../shared/models/view/order-info.view-model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [MatTableModule, MatProgressBarModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatTooltipModule, CommonModule, MatFormField, MatLabel],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent implements OnChanges {
  @Input() query: QueryOrderInfoParams;
  @Input() hideDate = false;
  @Output() selectedChange: EventEmitter<Set<number>> = new EventEmitter();
  @Output() copyOrder: EventEmitter<OrderInfoViewModel> = new EventEmitter();

  public displayedColumns: string[] = ['memberName', 'items', 'subtotal', 'status', 'actions'];

  public data: OrderInfoViewModel[] = [];

  public isLoading = signal(true);
  public selectedRows: Set<number> = new Set();

  constructor(
    private readonly _orderService: OrderInfoService
  ) { }

  public ngOnInit(): void {
    this._fetchData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hideDate']) {
      this._setupDisplayedColumns();
    }
  }

  private _fetchData(): void {
    this.isLoading.set(true);
    this._orderService.query(this.query)
      .pipe(
        finalize(() => this.isLoading.set(false)),
        map((response: OrderInfo[]) => response.map(order => OrderInfoViewModel.createFromApiModel(order)))
      )
      .subscribe(data => this.data = data);
  }

  private _setupDisplayedColumns(): void {
    if (this.hideDate) {
      this.displayedColumns = ['memberName', 'items', 'subtotal', 'status', 'actions'];
    } else {
      this.displayedColumns = ['createdAt', 'memberName', 'items', 'subtotal', 'status', 'actions'];
    }
  }

  public refresh(): void {
    this._fetchData();
  }

  public deleteRow(id: number): void {
    this._orderService.delete(id)
      .subscribe(() => {
        this.data = this.data.filter(order => order.id !== id);
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
    return this.data.reduce((total, order) => total + order.subtotal, 0);
  }

  public calculateQuantity(): number {
    return this.data.reduce((total, order) => total + order.totalCount, 0);
  }

  applyFilter(event: Event) {
    console.log(typeof event)
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
