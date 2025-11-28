import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userName: string = '';
  userEmail: string = '';

  GetName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  GetEmail(event: Event) {
    this.userEmail = (event.target as HTMLInputElement).value;
  }
}
