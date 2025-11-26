import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Home } from '../home/home';
import { Profile } from '../profile/profile';
import { Login } from '../login/login';
import { Register } from '../register/register';

@Component({
  selector: 'app-header',
  imports: [RouterLink,Home,Profile,Login,Register],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
