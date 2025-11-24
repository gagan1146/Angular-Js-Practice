import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  standalone: true,
  templateUrl: './switch-case.html',
  styleUrl: './switch-case.css',
})
export class SwitchCase {

  color = 'red';

  func(event: Event) {
    const value = (<HTMLInputElement>event.target).value;

    switch (value) {
      case '1':
        this.color = 'red';
        break;

      case '2':
        this.color = 'blue';
        break;

      case '3':
        this.color = 'green';
        break;

      case '4':
        this.color = 'gold';
        break;

      case '5':
        this.color = 'black';
        break;

      default:
        this.color = 'gray'; 
        break;
    }
  }
}