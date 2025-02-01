import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
import { dummyTasks, Task } from '../dummy-tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks = signal<Task[]>(dummyTasks);
  selectedUser = computed(() =>
    this.users.find((user) => user.id === this.selectedUserId())
  );
  userTasks = computed(() => {
    return this.tasks().filter(
      (task) => task.userId === this.selectedUser()?.id
    );
  });
  selectedUserId = signal<string | undefined>(undefined);
  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
  onCompleteTask(taskId: string) {
    this.tasks.update((old) => old.filter((task) => task.id !== taskId));
  }
  title = 'first-angular-app';
}
