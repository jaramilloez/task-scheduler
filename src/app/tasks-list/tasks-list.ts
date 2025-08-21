import { Component, inject, signal, OnInit } from '@angular/core';
import { TasksService } from '../tasks-service/tasks-service';
import { Task } from '../task-model/task';
import { TaskCards } from './task-cards/task-cards';
import { Filters } from './filters/filters';
import { Pagination } from './pagination/pagination';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskCards, Filters, Pagination],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList implements OnInit {
  public tasks: Task[] | null = [];
  private tasksService = inject(TasksService);

  ngOnInit() {
    this.tasks = this.tasksService.getAllTasks();
  }
}
