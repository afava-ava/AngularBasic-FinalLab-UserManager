import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { UserListItem } from '../user-list-item/user-list-item';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem, RouterLink],
  templateUrl: './user-list.html'
})
export class UserList {
  @Input() users: User[] = [];
  @Output() onAddUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<number>();

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }
}
