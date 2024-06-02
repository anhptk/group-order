import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification-message',
  standalone: true,
  templateUrl: './notification-message.component.html',
  styleUrl: './notification-message.component.scss'
})
export class NotificationMessageComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) {
  }
}
