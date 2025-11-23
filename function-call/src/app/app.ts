import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value:number = 0;
  protected readonly title = signal('function-call');
  myFunction(){
    console.log("Function called!");
    // alert("Button clicked!");
    this.otherFunction();
  }
  otherFunction(){
    console.log("Other Function called internally!");
  }
  increment(){
    this.value += 1;
  }
  decrement(){
    this.value -= 1;
    }
}
