import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { IUserModel } from './user.model';

// type UserModel = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: IUserModel;
  @Input({ required: true }) isSelected!: boolean;
  
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output('select') selectUserEvent = new EventEmitter<string>();

  get imagePath() {
    return `images/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    this.selectUserEvent.emit(this.user.id);
  }

  // @Input() avatar!: string;
  // @Input({
  //   required: true
  // }) name!: string;

  // avatar = input<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return `images/users/${this.avatar()}`;
  // });

  // onSelectUser(): void {

  // }

  // get imagePath() {
  //   return `images/users/${this.avatar()}`;
  // }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `images/users/${this.selectedUser().avatar}`);


  

  // onSelectUser(): void {
  //   const localRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[localRandomIndex]);
  // }
}
