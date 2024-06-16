import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MemberInfo } from '../../../models/api/member-info.model';
import { AppDataService } from '../../../services/auth/app-data.service';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatDividerModule, RouterModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentUser = signal<MemberInfo>(null);
  public readonly loginUrl: string;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _appDataService: AppDataService,
    private readonly _router: Router
  ) {
    this.loginUrl = `${environment.homepage}/auth0/login`;
    this._subscribeToCurrentUser();
  }

  private _subscribeToCurrentUser(): void {
    this._appDataService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
    });
  }

  public logout(): void {
    this._router.navigateByUrl(`${environment.homepage}/auth0/logout`)
      .then(() => {
        this._appDataService.logout();
      });
  }
}
