import { Injectable } from '@angular/core';
import { RequestHelperService } from '../utils/request-helper.service';
import { Observable } from 'rxjs';
import { CreateMemberPayload, MemberInfo } from '../../models/api/member-info.model';
import { LoginPayload, LoginResponse, RefreshTokenPayload, RefreshTokenResponse } from '../../models/api/login.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public register(payload: CreateMemberPayload): Observable<void> {
    return this._requestHelper.post('/members', payload);
  }
    
  public getCurrentUser(): Observable<MemberInfo> {
    return this._requestHelper.get('/members/me');
  }
  
  public getLoginToken(payload: LoginPayload): Observable<LoginResponse> {
    return this._requestHelper.post('/token', payload);
  }

  public refreshAccessToken(payload: RefreshTokenPayload): Observable<RefreshTokenResponse> {
    return this._requestHelper.post('/token/refresh', payload);
  }
}
