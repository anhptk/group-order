import { Injectable } from '@angular/core';
import { RequestHelperService } from '../utils/request-helper.service';
import { Observable } from 'rxjs';
import { CreateMemberPayload, MemberInfo } from '../../models/member-info.model';
import { LoginPayload, LoginResponse } from '../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public register(payload: CreateMemberPayload): Observable<void> {
    return this._requestHelper.post('/members', payload);
  }

  public getDetails(id: number): Observable<MemberInfo> {
    return this._requestHelper.get(`/members/${id}`);
  }

}
