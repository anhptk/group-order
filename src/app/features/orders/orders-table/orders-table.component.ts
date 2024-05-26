import { Component, Input, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OrderInfo, QueryOrderInfoParams } from '../../../shared/models/api/order-info.model';
import { OrderInfoService } from '../../../shared/services/api/order-info.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [MatTableModule, MatProgressBarModule],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent {
  @Input() query: QueryOrderInfoParams;

  public displayedColumns: string[] = ['memberName', 'items', 'subtotal', 'status', 'actions'];

  public data: OrderInfo[] = [];

  public isLoading = signal(true);

  constructor(
    private readonly _orderService: OrderInfoService
  ) { }

  public ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData(): void {
    this.isLoading.set(true);
    this._orderService.query(this.query)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe(data => this.data = data);
  }

  public refresh(): void {
    this._fetchData();
  }

  public calculateSubTotal(order: OrderInfo): number {
    return order.items.reduce((total, item) => total + item.unit_price * item.quantity, 0);
  }

  public calculatePrice(): number {
    return this.data.reduce((total, order) => total + this.calculateSubTotal(order), 0);
  }

  public calculateQuantity(): number {
    return this.data.reduce((total, order) => total + order.items.reduce((total, item) => total + item.quantity, 0), 0);
  }
}
