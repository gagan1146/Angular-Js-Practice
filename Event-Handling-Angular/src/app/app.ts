import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Event-Handling-Angular');

  func(event:any) {
    console.log(event.type);
    if(event.type=="input"){
      console.log(event.target.value);
    }
  }
}
