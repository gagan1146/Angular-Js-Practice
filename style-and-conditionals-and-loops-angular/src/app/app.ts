import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Conditional } from './conditional/conditional';
import { SwitchCase } from './switch-case/switch-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile,Conditional,SwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('style-and-conditionals-angular');
}
