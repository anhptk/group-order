import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MemberInfo } from '../../../models/api/member-info.model';
import { AppDataService } from '../../../services/auth/app-data.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '@auth0/auth0-angular';
import { MemberInfoComponent } from '../../../../features/profiles/member-info/member-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatDividerModule, RouterModule, MatIconModule, MatMenuModule, MemberInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentUser = signal<MemberInfo>(null);

  constructor(
    private readonly _appDataService: AppDataService,
    private readonly _authService: AuthService
  ) {
    this._subscribeToCurrentUser();
  }

  private _subscribeToCurrentUser(): void {
    this._appDataService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
    });
  }

  public login(): void {
    this._authService.loginWithRedirect();
  }

  public logout(): void {
    this._authService.logout({logoutParams: {returnTo: window.location.origin}})
      .subscribe(() => {
        this._appDataService.logout();
      });
  }
}
