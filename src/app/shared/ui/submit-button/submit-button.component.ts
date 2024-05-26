import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [MatIconModule, MatProgressSpinnerModule, MatButton],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent {
  disabled = input(false);
  isSubmitting = input(false);

  @Output() action = new EventEmitter<void>();
}
