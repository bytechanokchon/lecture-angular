import { Component } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-user';
import { Tasks } from "./tasks/tasks";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
