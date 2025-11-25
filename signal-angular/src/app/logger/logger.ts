import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-logger',
  standalone: true,
  templateUrl: './logger.html'
})
export class Logger {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log("Count changed:", this.count());
    });
  }

  increase() {
    this.count.update(n => n + 1);
  }
}
