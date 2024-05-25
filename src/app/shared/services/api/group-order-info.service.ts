import { Injectable } from '@angular/core';
import { RequestHelperService } from '../utils/request-helper.service';
import { Observable } from 'rxjs';
import { CompleteGroupOrderInfoPayload, CreateGroupOrderInfoPayload, GroupOrderInfo, QueryGroupOrderInfoParams } from '../../models/group-order-info.model';

@Injectable({
  providedIn: 'root'
})
export class GroupOrderInfoService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public create(payload: CreateGroupOrderInfoPayload): Observable<void> {
    return this._requestHelper.post('/group-orders', payload);
  }

  public query(params: QueryGroupOrderInfoParams): Observable<GroupOrderInfo[]> {
    return this._requestHelper.get('/group-orders', {params});
  }

  public getDetails(id: number): Observable<GroupOrderInfo> {
    return this._requestHelper.get(`/group-orders/${id}`);
  }

  public complete(id: number, payload: CompleteGroupOrderInfoPayload): Observable<void> {
    return this._requestHelper.put(`/group-orders/${id}/complete`, payload);
  }
}
