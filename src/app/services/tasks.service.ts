import { computed, Injectable, signal } from '@angular/core';
import { DUMMY_USERS, User } from '../../dummy-users';
import { dummyTasks, Task } from '../../dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  users = signal<User[]>(DUMMY_USERS);
  tasks = signal<Task[]>([]);

  constructor() {
    let localTasksJson = localStorage.getItem('tasks');
    if (localTasksJson) {
      this.tasks.set(JSON.parse(localTasksJson));
    } else {
      this.tasks.set(dummyTasks);
      this.updateTasks();
    }
  }

  selectedUserId = signal<string | undefined>(undefined);

  selectedUser = computed(() =>
    this.users().find((user) => user.id === this.selectedUserId())
  );

  userTasks = computed(() => {
    return this.tasks().filter(
      (task) => task.userId === this.selectedUser()?.id
    );
  });

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }

  onCompleteTask(taskId: string) {
    this.tasks.update((old) => old.filter((task) => task.id !== taskId));
    this.updateTasks();
  }

  onCreateTask(task: Task) {
    this.tasks.update((old) => [...old, task]);
    this.updateTasks();
  }
  private updateTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
