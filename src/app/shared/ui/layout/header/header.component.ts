import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../../../features/auth/login/login.component';
import { RegisterComponent } from '../../../../features/auth/register/register.component';
import { MatDividerModule } from '@angular/material/divider';
import { MemberInfo } from '../../../models/api/member-info.model';
import { AppDataService } from '../../../services/auth/app-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatDividerModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentUser = signal<MemberInfo>(null);

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _appDataService: AppDataService
  ) {
    this._subscribeToCurrentUser();
  }

  private _subscribeToCurrentUser(): void {
    this._appDataService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
    });
  }

  public openLoginDialog() {
    const dialogRef = this._dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result:MemberInfo) => {
      if (result) this._appDataService.fetchUser(result);
    });
  }

  public openRegisterDialog() {
    const dialogRef = this._dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.openLoginDialog();
    });
  }

  public logout(): void {
    this._appDataService.logout();
  }
}
