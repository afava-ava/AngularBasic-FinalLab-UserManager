import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from "../../components/user-list/user-list";
import { User } from '../../models/user';
import { UserApi } from '../../services/user-api';

@Component({
  selector: 'app-user-manager',
  imports: [UserList, AsyncPipe],
  template:`
  <app-user-list [users]="(users$ | async) ?? []"></app-user-list>
  `

})
export class UserManager implements OnInit{
  users$!: Observable<User[]>;
  usersApi = inject(UserApi);
  
  ngOnInit(){
    this.users$ = this.usersApi.getUsers();
  }
}
