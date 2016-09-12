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
  constructor(private userService:UserManageService) {
    this.userService.getUsers();
  }
  ngOnInit() {
    this.userService.userData.subscribe((users) => {
      if(users) {
        this.users = users;
      }
    })
  }
}
