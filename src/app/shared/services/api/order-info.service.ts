import { Injectable } from '@angular/core';
import { CreateOrderInfoPayload, OrderInfo, QueryOrderInfoParams } from '../../models/order-info.model';
import { Observable } from 'rxjs';
import { RequestHelperService } from '../utils/request-helper.service';

@Injectable({
  providedIn: 'root'
})
export class OrderInfoService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public create(payload: CreateOrderInfoPayload): Observable<void> {
    return this._requestHelper.post('/orders', payload);
  }

  public query(params: QueryOrderInfoParams): Observable<OrderInfo[]> {
    return this._requestHelper.get('/orders', { params });
  }

  public delete(id: number): Observable<void> {
    return this._requestHelper.delete(`/orders/${id}`);
  }
}
