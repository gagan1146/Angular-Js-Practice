import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile {
  name: string | null = '';
  email: string | null = '';
  password: string | null = '';
  login = false;

  constructor(route: ActivatedRoute) {
    this.name = route.snapshot.paramMap.get('name');
    this.email = route.snapshot.paramMap.get('email');
    this.password = route.snapshot.paramMap.get('password');

    if (
      (this.name === 'Gagan Sharma' && this.email === 'gagansharma@gmail.com') ||
      (this.password === '12345' && this.email === 'gagansharma@gmail.com')
    ) {
      this.login = true;
    }
  }
}
