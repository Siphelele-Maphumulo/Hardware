import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Set base href dynamically to support GitHub Pages subpath
platformBrowserDynamic([{ provide: APP_BASE_HREF, useValue: '/Hardware/' }])
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
