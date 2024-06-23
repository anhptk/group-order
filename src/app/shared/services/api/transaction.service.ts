import { Injectable } from '@angular/core';
import { RequestHelperService } from '../utils/request-helper.service';
import { Observable } from 'rxjs';
import { Transaction, QueryTransactionParams, CreateTransactionPayload } from '../../models/api/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public query(params?: QueryTransactionParams): Observable<Transaction[]> {
    return this._requestHelper.get('/transactions', { params });
  }

  public trade(toMemberId: number, amount: number): Observable<void> {
    return this._requestHelper.post('/transactions', { to_member: toMemberId, amount } as CreateTransactionPayload);
  }
}
