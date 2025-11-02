import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `images/users/${this.selectedUser.avatar}`;
  }

  onSelectUser(): void {
    const localRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[localRandomIndex];
  }
}
