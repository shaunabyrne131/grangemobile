import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase and Google Analytics
const firebaseApp = initializeApp(environment.firebase);
const analytics = getAnalytics(firebaseApp);

// Bootstrap the Angular application module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  