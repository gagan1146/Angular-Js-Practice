import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Users } from './users/users';
import { Details } from './details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'users', component: Users },
  { path: 'details', component: Details },
  { path: '**', redirectTo: 'home' },
];
