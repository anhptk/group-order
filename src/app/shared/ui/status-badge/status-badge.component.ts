import { Component, Input } from '@angular/core';
import { OrderStatus } from '../../enums/order.status';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input({required: true}) status: OrderStatus;
}
