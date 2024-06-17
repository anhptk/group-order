import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { AuthService, AuthClientConfig } from '@auth0/auth0-angular';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: AuthService, useValue: {} },
    { provide: AuthClientConfig, useValue: {} }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
