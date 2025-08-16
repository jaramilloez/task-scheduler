import { Routes } from '@angular/router';
import { TasksList } from './tasks-list/tasks-list';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: TasksList,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
