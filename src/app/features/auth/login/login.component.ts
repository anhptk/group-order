import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { LoginFormViewModel } from '../../../shared/models/forms/authentication-form.view-model';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from '../../../shared/services/auth/authentication.service';
import { MemberInfo } from '../../../shared/models/api/member-info.model';
import { SecurityService } from '../../../shared/services/api/sercurity.service';
import { finalize, map, switchMap } from 'rxjs';
import { LoginResponse } from '../../../shared/models/api/login.model';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { SubmitButtonComponent } from '../../../shared/ui/submit-button/submit-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatInputModule, ReactiveFormsModule, SubmitButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public mainForm: FormGroup<LoginFormViewModel>;
  public isSubmitting = false;

  constructor(
    private readonly _securityService: SecurityService,
    private readonly _dialogRef: MatDialogRef<LoginComponent>,
    private readonly _authService: AuthenticationService
  ) {
    this._constructMainForm();
  }

  private _constructMainForm(): void {
    this.mainForm = new FormGroup<LoginFormViewModel>({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required])
    });
  }

  public login(): void {
    if (this.mainForm.valid) {
      const payload = {
        email: this.mainForm.value.email,
        password: this.mainForm.value.password
      }

      this.isSubmitting = true;
      this._securityService.getLoginToken(payload)
        .pipe(
          switchMap((response: LoginResponse) => {
            this._authService.setTokens(response);
            return this._securityService.getCurrentUser()
        }),
        finalize(() => this.isSubmitting = false)
      )
        .subscribe((response: MemberInfo) => {
          this._dialogRef.close(response)
        });
    }
  }
}
