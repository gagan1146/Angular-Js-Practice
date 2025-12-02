import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Users } from './users/users';
import { Details } from './details/details';
import { FormGroup } from '@angular/forms';
import { TemplateForm } from './template-form/template-form';
import { BackgroundChanger } from './background-changer/background-changer';
import { FormUsingNg } from './form-using-ng/form-using-ng';
import { ParentToChildData } from './parent-to-child-data/parent-to-child-data';
import { PipesOverview } from './pipes-overview/pipes-overview';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  { path: 'grouplogin', component: Login },
  { path: 'register', component: Register },
  { path: 'users', component: Users },
  { path: 'details', component: Details },
  { path: "template-form", component: TemplateForm},
  { path: "background-changer", component: BackgroundChanger},
  { path: "form-using-ng", component: FormUsingNg},
  { path: "parent-to-child-data", component: ParentToChildData},
  { path: "pipes-overview", component: PipesOverview},
  { path: '**', redirectTo: 'home' }
];
