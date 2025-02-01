import { Component, input, output } from '@angular/core';
import { Task } from '../../../../dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  compleatTask = output<string>();
  onComplete() {
    this.compleatTask.emit(this.task().id);
  }
}
