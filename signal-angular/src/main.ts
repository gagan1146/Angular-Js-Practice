// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './../../understanding-custom-component-in-angular/src/app/app';

// Optional: add routes if you want navigation (example below).
const routes:any = [
  // lazy or direct routes can be added later if needed
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
