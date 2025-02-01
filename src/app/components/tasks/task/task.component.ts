import { Component, input, output } from '@angular/core';
import { Task } from '../../../../dummy-tasks';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(readonly tasksService: TasksService) {}
  task = input.required<Task>();
  onComplete() {
    this.tasksService.onCompleteTask(this.task().id);
  }
}
