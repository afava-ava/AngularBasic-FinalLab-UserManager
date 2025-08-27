import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { UserListItem } from '../user-list-item/user-list-item';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem, RouterLink],
  templateUrl: './user-list.html'
})
export class UserList {
  users = input<User[]>([]);
  isMock = input(false);
  onAddUser = output<any>();
  deleteUser = output<number>();

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }
}
