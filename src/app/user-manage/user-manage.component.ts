import { Component ,ViewEncapsulation ,OnInit ,OnChanges ,SimpleChanges } from '@angular/core';

import { User } from '../../shared/models/user-information.model'
import { UserManageService } from '../../shared/providers/user-manage.service';


@Component({
  moduleId: module.id,
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls:['./user-manage.component.css'],
  providers:[UserManageService]
})
export class UserManage implements OnChanges {
  users:User[];
  obj:{[k:string]:number} = {a:1};
  private initFlag = true;
  curUser:User;
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
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log(this.users,"change");
  }
  //change current user
  changeCurUser(u:User) {
    this.curUser = u;
  }
}
