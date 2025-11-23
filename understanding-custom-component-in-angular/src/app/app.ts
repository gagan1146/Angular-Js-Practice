import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton } from './my-button/my-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('understanding-custom-component-in-angular');
}
