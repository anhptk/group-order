import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NotificationService } from '../services/notification/notification.service';
import { catchError, tap } from 'rxjs';

const BYPASS_URLS = [
  'token',
];

export const apiRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);

  let bypass = false;
  bypass = BYPASS_URLS.some(url => req.url.includes(url));

  if (bypass) {
    return next(req);
  } 

  return next(req).pipe(
    tap((event) => {
      if (req.method !== 'GET' && req.method !== 'OPTIONS' && event.type === HttpEventType.Response) {
        notificationService.pushSuccess('Request completed successfully');
      }
    }),
    catchError(err => {
      notificationService.pushFail('Something went wrong');
      throw err;
    })
  );
}
