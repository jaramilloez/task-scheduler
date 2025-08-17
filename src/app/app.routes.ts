import { Routes } from '@angular/router';
import { TasksList } from './tasks-list/tasks-list';
import { PageNotFound } from './page-not-found/page-not-found';
import { SingleTask } from './single-task/single-task';

export const routes: Routes = [
  {
    path: '',
    component: TasksList,
  },
  {
    path: 'task/:task-id',
    component: SingleTask,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
