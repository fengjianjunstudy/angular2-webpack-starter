import { Routes, RouterModule } from '@angular/router';
import { AuthManage } from './auth-manage';
import { GroupManage } from './group-manage';
import { UserManage } from './user-manage';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: UserManage },
  { path: 'user',  component: UserManage },
  { path: 'group', component: GroupManage },
  { path: 'auth', component: AuthManage },
];
