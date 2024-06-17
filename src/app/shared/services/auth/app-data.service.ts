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

  constructor(
    private readonly _securityService: SecurityService
  ) { }

  public initializeUser(): void {
    this._securityService.getCurrentUser()
      .pipe(filter(user => !!user))
      .subscribe(user => {
        this._currentUser$.next(user);
    });
  }

  public get currentUser$(): Observable<MemberInfo | null> {
    return this._currentUser$.asObservable();
  }

  public logout(): void {
    this._currentUser$.next(null);
  }

}
