import { Component } from '@angular/core';
import { MemberInfo, UpdateMemberPayload } from '../../../shared/models/api/member-info.model';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MemberProfileFormViewModel } from '../../../shared/models/forms/member-profile-form.view-model';
import { SecurityService } from '../../../shared/services/api/sercurity.service';
import { AppDataService } from '../../../shared/services/auth/app-data.service';

@Component({
  selector: 'app-member-profile',
  standalone: true,
  imports: [MatDividerModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton, MatIcon],
  templateUrl: './member-profile.component.html',
  styleUrl: './member-profile.component.scss'
})
export class MemberProfileComponent {
  public member: MemberInfo;
  public mainForm: FormGroup<MemberProfileFormViewModel>;

  constructor(
    private readonly _appDataService: AppDataService,
    private readonly _securityService: SecurityService
  ) {
    this.mainForm = this._constructForm();
  }

  ngOnInit() {
    this._appDataService.currentUser$.subscribe((user: MemberInfo) => {
      this.member = user;
      this.mainForm.patchValue({
        name: this.member?.name,
        email: this.member?.email,
        picture: this.member?.picture
      });

      this.mainForm.controls.email.disable();
    });
  }

  private _constructForm(): FormGroup<MemberProfileFormViewModel> {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      picture: new FormControl(null)
    });
  }

  public update(): void {
    const payload = this._preparePayload();

    this._securityService.updateCurrentUser(payload).subscribe(() => {
      this._appDataService.initializeUser();
      this.mainForm.markAsPristine();
    })
  }

  private _preparePayload(): UpdateMemberPayload {
    const payload: UpdateMemberPayload = {};

    if (this.mainForm.controls.name.dirty) {
      payload.name = this.mainForm.controls.name.value;
    }

    if (this.mainForm.controls.picture.dirty) {
      payload.picture = this.mainForm.controls.picture.value;
    }

    return payload;
  }
}
