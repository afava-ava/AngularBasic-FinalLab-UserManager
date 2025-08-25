import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  private mockUsers: User[] = [
    { id: 1, firstName: 'Juan', lastName: 'Pérez', email: 'juan.perez@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, firstName: 'Ana', lastName: 'López', email: 'ana.lopez@example.com', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, firstName: 'Luis', lastName: 'Martínez', email: 'luis.martinez@example.com', avatar: 'https://i.pravatar.cc/150?img=3' }
  ];

  http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.mockUsers.find(user => user.id === id);
    return of(user);
  }

  addUser(newUser: Omit<User, 'id'>): Observable<User> {
    const nextId = this.generateNextId();
    const createdUser: User = { id: nextId, ...newUser };
    this.mockUsers.push(createdUser);
    return of(createdUser);
  }

  private generateNextId(): number {
    return this.mockUsers.length > 0 ? Math.max(...this.mockUsers.map(u => u.id)) + 1 : 1;
  }
}
