import { Injectable } from '@angular/core';
import { MemberInfo } from '../../models/api/member-info.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { SecurityService } from '../api/sercurity.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public readonly REFRESH_RATE = 1000 * 60 * 60;
  private _currentUser$ = new BehaviorSubject<MemberInfo | null>(null);

  private _refreshInterval: NodeJS.Timeout;

  constructor(
    private readonly _authService: AuthenticationService,
    private readonly _securityService: SecurityService
  ) { }

  public get currentUser$(): Observable<MemberInfo | null> {
    return this._currentUser$.asObservable();
  }

  private _startRefreshInterval(): void {
    this._refreshInterval = setInterval(() => {
      
    }, this.REFRESH_RATE);
  }

  public logout(): void {
    this._currentUser$.next(null);
    clearInterval(this._refreshInterval);
    this._authService.logout();
  }

  public fetchUser(user: MemberInfo): void {
    this._currentUser$.next(user);
    this._startRefreshInterval();
  }
}
