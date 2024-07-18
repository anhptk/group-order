import { Injectable } from '@angular/core';
import { MemberInfo } from '../../models/api/member-info.model';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { ProfileService } from '../api/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public readonly REFRESH_RATE = 1000 * 60 * 30;
  private _currentUser$ = new BehaviorSubject<MemberInfo | null>(null);

  constructor(
    private readonly _profileService: ProfileService
  ) { }

  public initializeUser(): void {
    this._profileService.getCurrentUser()
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
