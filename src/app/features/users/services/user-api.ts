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

  // /** Create new user */
  // addUser(newUser: User, useMock: boolean = true): void {
  //   if (useMock) {
  //     newUser.id = this.generateNextId();
  //     this.mockUsers.push(newUser);
  //     this.users.set([...this.mockUsers]); // update signal
  //   } else {
  //     this.http.post<User>('/api/users', newUser).subscribe(user => {
  //       this.users.update(users => [...users, user]);
  //     });
  //   }
  // }

  // /** Update existing user */
  // updateUser(updatedUser: User, useMock: boolean = true): void {
  //   if (useMock) {
  //     this.mockUsers = this.mockUsers.map(u => u.id === updatedUser.id ? updatedUser : u);
  //     this.users.set([...this.mockUsers]);
  //   } else {
  //     this.http.put<User>(`/api/users/${updatedUser.id}`, updatedUser).subscribe(user => {
  //       this.users.update(users => users.map(u => u.id === user.id ? user : u));
  //     });
  //   }
  // }

  // /** Delete user */
  // deleteUser(id: number, useMock: boolean = true): void {
  //   if (useMock) {
  //     this.mockUsers = this.mockUsers.filter(u => u.id !== id);
  //     this.users.set([...this.mockUsers]);
  //   } else {
  //     this.http.delete(`/api/users/${id}`).subscribe(() => {
  //       this.users.update(users => users.filter(u => u.id !== id));
  //     });
  //   }
  // }

  // /** Helper to generate next ID */
  // private generateNextId(): number {
  //   return this.mockUsers.length > 0 ? Math.max(...this.mockUsers.map(u => u.id)) + 1 : 1;
  // }
}
