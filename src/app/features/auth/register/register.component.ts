import { Component } from '@angular/core';
import { RegisterFormViewModel } from '../../../shared/models/forms/authentication-form.view-model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MemberService } from '../../../shared/services/api/member.service';
import { CreateMemberPayload } from '../../../shared/models/member-info.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public mainForm: FormGroup<RegisterFormViewModel>;

  constructor(
    private readonly _memberService: MemberService
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

    this._memberService.register(payload).subscribe(() => {
      // Do something after successful registration
      console.log('Registration successful!')
    });
  }
}
