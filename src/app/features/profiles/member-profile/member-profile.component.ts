import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MemberInfo, UpdateMemberPayload } from '../../../shared/models/api/member-info.model';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MemberProfileFormViewModel } from '../../../shared/models/forms/member-profile-form.view-model';
import { ProfileService } from '../../../shared/services/api/profile.service';
import { AppDataService } from '../../../shared/services/auth/app-data.service';
import { TransactionsComponent } from '../../transactions/transactions.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TradeDialogComponent } from '../../transactions/trade-dialog/trade-dialog.component';

@Component({
  selector: 'app-member-profile',
  standalone: true,
  imports: [MatDividerModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton, MatIcon, TransactionsComponent, RouterModule, MatDialogModule],
  templateUrl: './member-profile.component.html',
  styleUrl: './member-profile.component.scss'
})
export class MemberProfileComponent implements OnInit {
  public member: WritableSignal<MemberInfo> = signal(undefined);
  public mainForm: FormGroup<MemberProfileFormViewModel>;

  private _currentUserId: number;
  private _memberId: number;
  public isMyProfile: boolean;

  constructor(
    private readonly _appDataService: AppDataService,
    private readonly _profileService: ProfileService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _dialog: MatDialog
  ) {
    this._memberId = this._activatedRoute.snapshot.params['memberId'];
    this.mainForm = this._constructForm();
  }

  ngOnInit() {
    if (this._memberId) {
      this._loadMemberData();
    }

    this._appDataService.currentUser$.subscribe((user: MemberInfo) => {
      this._currentUserId = user?.id;

      if (!this._memberId) {
        this._bindData(user);
      }
    });

    this._activatedRoute.paramMap.subscribe((params) => {
      this._memberId = +params.get('memberId');

      if (this._memberId) {
        this._loadMemberData();
      }
    });
  }

  private _loadMemberData(): void {
    this._profileService.getMember(this._memberId).subscribe((member: MemberInfo) => {
      this._bindData(member);
    });
  }

  private _constructForm(): FormGroup<MemberProfileFormViewModel> {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      picture: new FormControl(null)
    });
  }

  private _bindData(member: MemberInfo): void {
    this.isMyProfile = this._currentUserId === member.id;
    this.member.set(member);
    
    if (this.isMyProfile) {
      this._bindForm();
    }
  }

  private _bindForm(): void {
    if (!this.member()) return;

    this.mainForm.patchValue({
      name: this.member().name,
      picture: this.member().picture
    });
  }

  public update(): void {
    const payload = this._preparePayload();

    this._profileService.updateCurrentUser(payload).subscribe(() => {
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

  public openTradeDialog(): void {
    const dialog = this._dialog.open(TradeDialogComponent, {
      data: {
        member: this.member()
      }
    });

    dialog.afterClosed().subscribe((traded: boolean) => {
      if (traded) {
        this._appDataService.initializeUser();

        if (!this.isMyProfile) {
          this._loadMemberData();
        }
      }
    });
  }
}
