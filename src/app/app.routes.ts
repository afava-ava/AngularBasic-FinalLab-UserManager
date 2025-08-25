import { Routes } from '@angular/router';
import { AddUser } from './features/users/containers/add-user/add-user';
import { UserDetail } from './features/users/containers/user-detail/user-detail';
import { UserManager } from './features/users/containers/user-manager/user-manager';

export const routes: Routes = [
    { path: '', component: UserManager },
    { path: 'users/add', component: AddUser },
    { path: 'users/:userId', component: UserDetail },
    
];
