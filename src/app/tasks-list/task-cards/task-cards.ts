import { Component, Input } from '@angular/core';
import { Task } from '../../task-model/task';

@Component({
  selector: 'app-task-cards',
  imports: [],
  templateUrl: './task-cards.html',
  styleUrl: './task-cards.css',
})
export class TaskCards {
  @Input() tasks: Task[] = [];
}
