import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';

  GetName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  GetEmail(event: Event) {
    this.userEmail = (event.target as HTMLInputElement).value;
  }

  GetPassword(event: Event) {
    this.userPassword = (event.target as HTMLInputElement).value;
  }
}