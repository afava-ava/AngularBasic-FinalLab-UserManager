import { Component, effect, inject, signal } from '@angular/core';
import { DataSourceToggle } from '../../components/data-source-toggle/data-source-toggle';
import { UserList } from "../../components/user-list/user-list";
import { User } from '../../models/user';
import { UserApi } from '../../services/user-api';
import { UserSettings } from '../../services/user-settings';

@Component({
  selector: 'app-user-manager',
  imports: [UserList, DataSourceToggle],
  template:`
  <app-data-source-toggle [checked]="userSettings.useMock()" (toggleChange)="setSource($event)"></app-data-source-toggle>
  <app-user-list [users]="users()" (deleteUser)="onDeleteUser($event)" [isMock]="userSettings.useMock()"></app-user-list>
  `
})  
export class UserManager {
  users = signal<User[]>([]);
  useMock = signal(true);
  usersApi = inject(UserApi);
  userSettings = inject(UserSettings);
  
  constructor(private userApi: UserApi) {
    effect(() => {
      if (this.userSettings.useMock()) {
        this.users.set(this.userApi.getUsers());
      } else {
        this.userApi.getRealUsers().subscribe(users => this.users.set(users));
      }
    });
  }

  setSource(useMock: boolean) {
  this.userSettings.useMock.set(useMock);
}

  onDeleteUser(id: number) {
    this.usersApi.deleteUser(id).subscribe(success => {
      if (success) {
        alert("User deleted successfully ✅");
      } else {
        alert("❌ Failed to delete user");
      }
    });
  } 
}
