import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OrdersTableComponent } from '../orders-table/orders-table.component';

@Component({
  selector: 'app-orders-dashboard',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatButtonModule, OrdersTableComponent],
  templateUrl: './orders-dashboard.component.html',
  styleUrl: './orders-dashboard.component.scss'
})
export class OrdersDashboardComponent {

}
