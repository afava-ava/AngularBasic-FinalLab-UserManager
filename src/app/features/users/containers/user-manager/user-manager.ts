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
  
  constructor() {
    effect(() => {
      this.refreshUsers();
    });
  }

  setSource(useMock: boolean) {
  this.userSettings.useMock.set(useMock);
}

  onDeleteUser(id: number) {
    const previousUsers = this.users();
    this.users.update(users => users.filter(u => u.id !== id));
    this.usersApi.deleteUser(id).subscribe({
      next: success => {
        if (success) {        
          alert("User deleted successfully ✅");
          this.refreshUsers();
        } else {
          this.users.set(previousUsers);
          alert("❌ Failed to delete user");          
        }
      },
      error: err => {
        this.users.set(previousUsers);
        alert("⚠️ Error deleting user");
      }
      
    });
  } 

  private refreshUsers(){
    this.usersApi.getUsers().subscribe(users => this.users.set(users));
  }
}
