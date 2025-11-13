import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home';
import { About } from './Components/about/about';
import { ItemsListComponent } from './Components/items/items-list';
import { ItemDetailsComponent } from './Components/item-details/item-details';
import { LoginComponent } from './Components/login/login';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: About},
    { path: 'items', component: ItemsListComponent },
    { path: 'items/:id', component: ItemDetailsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
