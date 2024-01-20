import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes = {

// }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),  provideHttpClient(withFetch()), FormsModule, RouterModule]
};
