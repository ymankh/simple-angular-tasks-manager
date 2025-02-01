import { Component, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(readonly tasksService: TasksService) {}

  isAddingTask = signal<boolean>(false);

  onCreateTask() {
    this.isAddingTask.update((old) => !old);
  }

  onAddTask() {
    this.isAddingTask.update((old) => !old);
  }
}
