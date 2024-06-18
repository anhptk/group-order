import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { apiRequestInterceptor } from './shared/interceptors/api-request.interceptor';
import { provideAuth0, authHttpInterceptorFn } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptors([apiRequestInterceptor, authHttpInterceptorFn])
    ),
    provideAuth0({
      domain: environment.authDomain,
      clientId: environment.authClientId,
      authorizationParams: {
        audience: environment.authAudience,
        redirect_uri: environment.authRedirectUri
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}/*`
          }
        ]
      }
    }),
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'dd/MM/yyyy'} }
  ]
};
