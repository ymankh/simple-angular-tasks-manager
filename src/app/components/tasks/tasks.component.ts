import { Component, computed, input, output, signal } from '@angular/core';
import { User } from '../../../dummy-users';
import { dummyTasks, Task } from '../../../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = dummyTasks;
  isAddingTask = signal<boolean>(false);
  selectedUser = input.required<User>();
  userTasks = input.required<Task[]>();
  completeTask = output<string>();
  createTask = output<Task>();
  onCompleteTask(taskId: string) {
    this.completeTask.emit(taskId);
  }
  onCreateTask(task: Task) {
    this.createTask.emit(task);
    this.isAddingTask.update((old) => !old);
  }
  onAddTask() {
    this.isAddingTask.update((old) => !old);
  }
}
