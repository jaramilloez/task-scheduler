import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task-model/task';
import { TasksService } from '../tasks-service/tasks-service';

@Component({
  selector: 'app-single-task',
  imports: [],
  templateUrl: './single-task.html',
  styleUrl: './single-task.css',
})
export class SingleTask implements OnInit {
  public task = signal<Task | null>(null);
  private router = inject(ActivatedRoute);
  private tasksService = inject(TasksService);
  ngOnInit(): void {
    const taskFound: Task | null = this.tasksService.getTask(
      this.router.snapshot.paramMap.get('id')
    );
    if (taskFound) {
      this.task.set(taskFound);
    } else {
    }
  }
}
