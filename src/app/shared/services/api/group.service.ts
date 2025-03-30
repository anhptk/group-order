import { Injectable } from '@angular/core';
import { RequestHelperService } from '../utils/request-helper.service';
import { CreateGroupPayload, Group, QueryGroupParams } from '../../models/api/group.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private readonly _requestHelper: RequestHelperService
  ) { }

  public query(params: QueryGroupParams): Observable<Group[]> {
    return this._requestHelper.get(this._baseUrl, {params});
  }

  public create(payload: CreateGroupPayload): Observable<Group> {
    return this._requestHelper.post(this._baseUrl, payload);
  }

  public getDetails(id: number): Observable<Group> {
    return this._requestHelper.get(`${this._baseUrl}/${id}`);
  }

  public update(id: number, payload: Partial<CreateGroupPayload>): Observable<void> {
    return this._requestHelper.patch(`${this._baseUrl}/${id}`, payload);
  }

  public delete(id: number): Observable<void> {
    return this._requestHelper.delete(`${this._baseUrl}/${id}`);
  }

  public join(id: number): Observable<void> {
    return this._requestHelper.post(`${this._baseUrl}/${id}/join`, null);
  }

  public leave(id: number): Observable<void> {
    return this._requestHelper.post(`${this._baseUrl}/${id}/leave`, null);
  }

  public updatePriority(id: number, priority: number): Observable<void> {
    return this._requestHelper.put(`${this._baseUrl}/${id}/priority`, {priority});
  }

  private get _baseUrl(): string {
    return '/groups';
  }
}
