import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public readonly accessToken$ = new BehaviorSubject<string | null>(null);

  public setAccessToken(token: string): void {
    this.accessToken$.next(token);
  };
}
