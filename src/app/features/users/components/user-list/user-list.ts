import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserListItem } from '../user-list-item/user-list-item';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem],
  templateUrl: './user-list.html'
})
export class UserList {
  @Input() users: User[] = [];
}
