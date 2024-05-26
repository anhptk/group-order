import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeHelperService {

  constructor() { }

  public toDateString(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
