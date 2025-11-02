import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input('avatar') avatar!: string;
  @Input('name') name!: string;

  onSelectUser(): void {
    console.log('Click!');
  }

  get imagePath() {
    return `images/users/${this.avatar}`;
  }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `images/users/${this.selectedUser().avatar}`);


  

  // onSelectUser(): void {
  //   const localRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[localRandomIndex]);
  // }
}
