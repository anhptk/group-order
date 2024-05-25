import { Component } from '@angular/core';
import { RegisterFormViewModel } from '../../../models/forms/authentication-form.view-model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public mainForm: FormGroup<RegisterFormViewModel>;

  constructor() {
    this._constructMainForm();
  }

  private _constructMainForm(): void {
    this.mainForm = new FormGroup<RegisterFormViewModel>({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      name: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required])
    });
  }
}
