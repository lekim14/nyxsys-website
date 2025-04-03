import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, RecaptchaSettings, ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from '../environments/environment.development';

const siteKey: string = environment.siteKey;

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: 'ngZone', useValue: 'noop' },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: siteKey },
    ReCaptchaV3Service,
  ]
};
