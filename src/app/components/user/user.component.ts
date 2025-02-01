import { Component, computed, input, output } from '@angular/core';
import { User } from '../../../dummy-users';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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
