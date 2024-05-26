import { Component, signal } from '@angular/core';
import { RegisterFormViewModel } from '../../../shared/models/forms/authentication-form.view-model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SecurityService } from '../../../shared/services/api/sercurity.service';
import { CreateMemberPayload } from '../../../shared/models/api/member-info.model';
import { finalize } from 'rxjs';
import { SubmitButtonComponent } from '../../../shared/ui/submit-button/submit-button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatInputModule, ReactiveFormsModule, SubmitButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public mainForm: FormGroup<RegisterFormViewModel>;
  public isSubmitting = false;

  constructor(
    private readonly _securityService: SecurityService,
    private readonly _dialogRef: MatDialogRef<RegisterComponent>
  ) {
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

  public submit(): void {
    if (this.mainForm.invalid) {
      return;
    }

    const payload: CreateMemberPayload = {
      email: this.mainForm.value.email,
      name: this.mainForm.value.name,
      password: this.mainForm.value.password
    }

    this.isSubmitting = true;
    this._securityService.register(payload)
    .pipe(finalize(() => this.isSubmitting = false))
    .subscribe(() => {
      this._dialogRef.close(true);
    });
  }
}
