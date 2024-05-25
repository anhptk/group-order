import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../../../features/auth/login/login.component';
import { RegisterComponent } from '../../../../features/auth/register/register.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public _dialog: MatDialog) {}

  public openLoginDialog() {
    const dialogRef = this._dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public openRegisterDialog() {
    const dialogRef = this._dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
