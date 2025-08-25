import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserForm } from "../../components/add-user-form/add-user-form";
import { UserApi } from '../../services/user-api';

@Component({
  selector: 'app-add-user',
  imports: [AddUserForm],
  template: `
    <app-add-user-form (save)="onSave($event)"></app-add-user-form>
  `
})
export class AddUser {
  private userApi = inject(UserApi);
  private router = inject(Router);

  onSave(user: any){
    this.userApi.addUser(user);
    this.router.navigate(['/']);
  }
}
