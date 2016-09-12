import { Component ,ViewEncapsulation ,OnInit } from '@angular/core';

import { User } from '../../shared/models/user-information.model'
import { UserManageService } from '../../shared/providers/user-manage.service';


@Component({
  moduleId: module.id,
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls:['./user-manage.component.css'],
  providers:[UserManageService]
})
export class UserManage implements OnInit {
  users:User[];
  obj:{[k:string]:number} = {a:1};
  private initFlag = true;
  curUser:User;
  constructor(private userService:UserManageService) {
    this.userService.getUsers();
  }
  ngOnInit() {
    this.userService.userData.subscribe((users) => {
      if(users) {
        if(this.initFlag) {
          this.curUser = users[0];
          this.initFlag = false;
        }
        this.users = users;
        console.log(this.users)
      }
    })
  }
  //change current user
  changeCurUser(u:User) {
    this.curUser = u;
  }
}
