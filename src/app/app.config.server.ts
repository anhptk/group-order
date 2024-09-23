import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { AuthService, AuthClientConfig } from '@auth0/auth0-angular';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(
      withFetch()
    ),
    provideRouter(routes),
    { provide: AuthService, useValue: {} },
    { provide: AuthClientConfig, useValue: {} }
  ]
};

export const config = mergeApplicationConfig(serverConfig);
