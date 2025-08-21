import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../task-model/task';

@Component({
  selector: 'app-task-cards',
  imports: [RouterLink],
  templateUrl: './task-cards.html',
  styleUrl: './task-cards.css',
})
export class TaskCards {
  @Input() tasks: Task[] | null = [];
}
