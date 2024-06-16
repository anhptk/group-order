import { Injectable } from '@angular/core';
import { MemberInfo } from '../../models/api/member-info.model';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { SecurityService } from '../api/sercurity.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public readonly REFRESH_RATE = 1000 * 60 * 30;
  private _currentUser$ = new BehaviorSubject<MemberInfo | null>(null);

  private _refreshInterval: ReturnType<typeof setInterval>;

  constructor(
    private readonly _securityService: SecurityService
  ) { }

  public initializeUser(): void {
    this._securityService.getCurrentUser()
      .pipe(filter(user => !!user))
      .subscribe(user => {
        this.fetchUser(user);
    });
  }

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
  }

  public fetchUser(user: MemberInfo): void {
    this._currentUser$.next(user);
    this._startRefreshInterval();
  }
}
