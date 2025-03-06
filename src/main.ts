import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavigationEnd, Router } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    const router = appRef.injector.get(Router);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-9EBGNN07XY', {
          page_path: event.urlAfterRedirects,
        });
      }
    })
  })
  .catch((err) => console.error(err));
