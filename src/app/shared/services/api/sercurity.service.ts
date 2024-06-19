import { Injectable } from '@angular/core';
import { RequestHelperService } from '../utils/request-helper.service';
import { Observable } from 'rxjs';
import { MemberInfo, UpdateMemberPayload } from '../../models/api/member-info.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public getCurrentUser(): Observable<MemberInfo> {
    return this._requestHelper.get('/members/me');
  }

  public updateCurrentUser(payload: UpdateMemberPayload): Observable<void> {
    return this._requestHelper.patch('/members/me', payload);
  }
}
