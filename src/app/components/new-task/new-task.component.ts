import { Component, output } from '@angular/core';
import { Task } from '../../../dummy-tasks';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  createTask = output<Task>();
  cancel = output<void>();
  onCreateTask(task: Task) {
    this.createTask.emit(task);
  }
  onCancel() {
    this.cancel.emit();
  }
}
