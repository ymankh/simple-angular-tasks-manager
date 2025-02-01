import { Component, input, model, output, signal } from '@angular/core';
import { Task } from '../../../dummy-tasks';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private readonly taskService: TasksService) {}
  createTask = output();
  cancel = output<void>();
  onCancel() {
    this.cancel.emit();
  }
  newTask = signal<Task>({
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: new Date().toISOString().split('T')[0],
  });
  onSubmit() {
    this.newTask.update((old) => ({
      ...old,
      id: uuid(),
      userId: this.taskService.selectedUserId()!,
    }));
    this.taskService.onCreateTask(this.newTask());
    this.createTask.emit();

  }
}
