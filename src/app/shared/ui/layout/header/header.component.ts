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
import { switchMap } from 'rxjs';
import { AuthenticationService } from '../../../services/auth/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatDividerModule, RouterModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentUser = signal<MemberInfo>(null);

  constructor(
    private readonly _appDataService: AppDataService,
    private readonly _authService: AuthService,
    private readonly _authenticationService: AuthenticationService
  ) {
    this._subscribeToCurrentUser();
  }

  private _subscribeToCurrentUser(): void {
    this._appDataService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
    });
  }

  public login(): void {
    this._authService.loginWithPopup()
      .pipe(switchMap(() => this._authService.getAccessTokenSilently()))
      .subscribe(accessToken => {
        this._authenticationService.setAccessToken(accessToken);
        this._appDataService.initializeUser();
      });
  }

  public logout(): void {
    this._authService.logout()
      .subscribe(() => {
        this._authenticationService.setAccessToken(null);
        this._appDataService.logout();
      });
  }
}
