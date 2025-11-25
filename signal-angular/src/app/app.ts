// app.component.ts
import { Component } from '@angular/core';
import { Form } from './form/form';
import { Logger } from './logger/logger';
import { Price } from './price/price';
import { CounterComponent } from './counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // include child components here so their selectors work in template
    CounterComponent,
    Price,
    Logger,
    Form
  ],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'Signals Demo';
}
