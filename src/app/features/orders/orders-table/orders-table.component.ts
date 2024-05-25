import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [MatTableModule, MatProgressBarModule],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent {
  public displayedColumns: string[] = ['memberName', 'items', 'subtotal', 'status', 'actions'];

  public data = [];
}
