import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./shared/ui/layout/layout.component";
import { AuthService } from '@auth0/auth0-angular';
import { AppDataService } from './shared/services/auth/app-data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, LayoutComponent]
})
export class AppComponent {

  constructor(
    private _authService: AuthService,
    private _appDataService: AppDataService
  ) {}

  ngOnInit() {
    if (!this._authService.isAuthenticated$) return;

    this._authService.user$
      .pipe(filter(user => !!user))
      .subscribe(user => {
        this._appDataService.initializeUser();
      });
  }
}
