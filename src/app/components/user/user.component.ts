import { Component, computed, input, output } from '@angular/core';
import { User } from '../../../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  avatarUrl = computed(() => `assets/users/${this.user().avatar}`);
  select = output<string>();

  onSelect() {
    this.select.emit(this.user().id);
  }

  constructor() {}
}
