import { Injectable } from '@angular/core';
import { LoginPayload, LoginResponse, RefreshTokenPayload, RefreshTokenResponse } from '../../models/api/login.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public readonly accessToken = new BehaviorSubject<string | null>(null);

  public get currentRefreshToken(): string {
    return localStorage?.getItem('refreshToken') || '';
  }

  public setTokens(response: LoginResponse): void {
    this.accessToken.next(response.access);
    localStorage.setItem('refreshToken', response.refresh);
  };

  public refreshToken(response: RefreshTokenResponse): void {
    this.accessToken.next(response.access);
  }

  public logout(): void {
    localStorage.removeItem('refreshToken');
    this.accessToken.next(null);
  }

}
