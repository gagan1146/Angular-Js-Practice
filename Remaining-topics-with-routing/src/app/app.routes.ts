import { Routes } from '@angular/router';
import { Header } from './header/header';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: 'header',
        component: Header
    },
    {
        path: '**',
        // redirectTo: 'header'
        component: PageNotFound
    }
];