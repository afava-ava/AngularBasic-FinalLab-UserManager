import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { mapApiUser } from '../mappers/user-mapper';
import { User } from '../models/user';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  private mockUsers: User[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      username: 'juanp',
      email: 'juan.perez@example.com',
      phone: '555-1234',
      address: {
        street: 'Calle Falsa',
        suite: 'Apt. 1',
        city: 'Madrid',
        zipCode: '28001'
      },
      company: 'Acme Inc.',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Ana López',
      username: 'analo',
      email: 'ana.lopez@example.com',
      phone: '555-5678',
      address: {
        street: 'Avenida Real',
        suite: 'Suite 2',
        city: 'Barcelona',
        zipCode: '08002'
      },
      company: 'Globex Corporation',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Luis Martínez',
      username: 'luism',
      email: 'luis.martinez@example.com',
      phone: '555-9012',
      address: {
        street: 'Plaza Mayor',
        suite: 'Piso 3',
        city: 'Valencia',
        zipCode: '46003'
      },
      company: 'Initech',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  http = inject(HttpClient);
  userSettings = inject(UserSettings);

  getUsers(): Observable<User[]> {
    return this.userSettings.useMock() ? of(this.getMockUsers()) : this.getRealUsers();
  }

  getRealUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
                .pipe(
                  map(users => users.map(mapApiUser))
                );
  }

  getMockUsers(): User[] {
    return this.mockUsers;
  }

  getUserById(id: number): Observable<User | undefined> {
    if (this.userSettings.useMock()) {
      const user = this.mockUsers.find(user => user.id === id);
      return of(user);
    }

    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .pipe(
                  map(mapApiUser)
                );
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

  deleteUser(id: number): Observable<boolean> {
    const index = this.mockUsers.findIndex(user => user.id === id);
    if (index !== -1) {
      this.mockUsers.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
