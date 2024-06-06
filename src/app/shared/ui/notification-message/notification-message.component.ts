import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotificationConfig } from './models/notification-config.model';

@Component({
  selector: 'app-notification-message',
  standalone: true,
  templateUrl: './notification-message.component.html',
  styleUrl: './notification-message.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NotificationMessageComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: NotificationConfig
  ) {
  }
}
