import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class App {
  users = DUMMY_USERS;
  userSelectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userSelectedUserId);
  }

  onSelectUser(id: string): void {
    this.userSelectedUserId = id;
  }
}
