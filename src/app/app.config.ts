import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(
      {
        closeButton: true, positionClass: 'toast-top-center',
        timeOut: 1000000,preventDuplicates:false
      }
    ),
    provideHttpClient(withFetch())
  ]
};
