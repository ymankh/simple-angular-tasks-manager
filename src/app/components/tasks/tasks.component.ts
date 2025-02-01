import { Component, computed, input, output } from '@angular/core';
import { User } from '../../../dummy-users';
import { dummyTasks, Task } from '../../../dummy-tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = dummyTasks;
  selectedUser = input.required<User>();
  userTasks = input.required<Task[]>();
  completeTask = output<string>();
  onCompleteTask(taskId: string) {
    this.completeTask.emit(taskId);
  }
}
