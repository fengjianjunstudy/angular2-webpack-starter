import { Component ,ViewEncapsulation } from '@angular/core';

import { User } from '../../shared/models/user-information.model'
import { UserManageService } from '../../shared/providers/user-manage.service';


@Component({
  moduleId: module.id,
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls:['./user-manage.component.css'],
  providers:[UserManageService]
})
export class UserManage {
  users:User[];
  loginUser:User;
  curUser:User;
  modalFlag = false;
  constructor(private userService:UserManageService) {
    this.userService.getUsers();
    this.userService.userData.subscribe((users) => {
      if(users) {
        this.users = users;
      }
    })
    this.userService.currentUser.subscribe((user:User) => {
      this.curUser = user;
    })
    this.loginUser = this.userService.getLoginUser();
  }
  onInviteUser():void {
    this.modalFlag = true;
  }
  onCloseModal():void {
    this.modalFlag = false;
  }
}
