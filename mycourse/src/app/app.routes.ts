import { Routes } from '@angular/router';
import { About } from './about/about';
import { TodoListComponent } from './todo-list/todo-list';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'todos', component: TodoListComponent },
];
