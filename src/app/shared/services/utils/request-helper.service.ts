import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestHelperService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public get(url: string, queryOptions: any = {}): Observable<any> {
    return this._httpClient.get(this._decorateUrl(url), queryOptions);
  }

  public post(url: string, body: any): Observable<any> {
    return this._httpClient.post(this._decorateUrl(url), body);
  }

  public patch(url: string, body: any): Observable<any> {
    return this._httpClient.patch(this._decorateUrl(url), body);
  }

  public put(url: string, body: any): Observable<any> {
    return this._httpClient.put(this._decorateUrl(url), body);
  }

  public delete(url: string): Observable<any> {
    return this._httpClient.delete(this._decorateUrl(url));
  }

  private _decorateUrl(url: string): string {
    return `${environment.apiUrl}${url}`;
  }
}
