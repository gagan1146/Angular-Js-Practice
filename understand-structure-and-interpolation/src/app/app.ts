import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('understand-structure-and-interpolation');
  x=20;
  y=30;
  expression="Expression Interpolation in AngularJS";
}
