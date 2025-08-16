import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task-model/task';
import { isImportAttribute } from 'typescript';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
//import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private http = inject(HttpClient);
  //private apiUrl = environment.apiUrl + '/tasks';
  private tasks: Task[] = [
    new Task(
      'abc1d',
      'Sweep',
      1,
      'Weeks',
      true,
      new Date(new Date().setDate(new Date().getDate() - 1))
    ),
    new Task(
      'abc2d',
      'Get a haircut',
      3,
      'Months',
      false,
      new Date(new Date().setMonth(new Date().getMonth() + 1))
    ),
    new Task(
      'abc3d',
      'Replace mattress',
      10,
      'Years',
      false,
      new Date(new Date().setFullYear(new Date().getFullYear() + 6))
    ),
    new Task(
      'abc4d',
      'Deep clean bathtub',
      2,
      'Weeks',
      true,
      new Date(new Date().setDate(new Date().getDate() - 21))
    ),
    new Task(
      'abc5d',
      'Do laundry',
      5,
      'Days',
      true,
      new Date(new Date().setDate(new Date().getDate() - 2))
    ),
    new Task(
      'abc6d',
      'Replace bike tires',
      3,
      'Months',
      false,
      new Date(new Date().setDate(new Date().getDate() + 21))
    ),
    new Task(
      'abc7d',
      'Take a shower',
      45,
      'Days',
      false,
      new Date(new Date().setDate(new Date().getDate() + 7))
    ),
    new Task(
      'abc8d',
      'Order dog food',
      1,
      'Months',
      true,
      new Date(new Date().setDate(new Date().getDate() - 3))
    ),
    new Task(
      'abc9d',
      'Replace HVAC air filter',
      6,
      'Months',
      true,
      new Date(new Date().setMonth(new Date().getMonth() - 1))
    ),
  ];

  getAllTasks(): Task[] {
    //return this.http.get<Task[]>(this.apiUrl);
    return this.tasks;
  }
  getTask(id: string): Task | undefined {
    //return this.http.get<Task>(`${this.apiUrl}/${id}`);
    return this.tasks.find((task) => task.id === id);
  }
  saveTask(task: Task): void {
    //this.http.post<Task>(this.apiUrl);
  }
  deleteTask(id: string): void {}
}
