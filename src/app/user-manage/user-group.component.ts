/**
 * Created by fengjj on 2016/9/12.
 */
import { Component ,Input   } from '@angular/core';

import { Group } from '../../shared/models/group-information.model';
import { User } from '../../shared/models/user-information.model'
import { UserManageService } from '../../shared/providers/user-manage.service';
@Component({
  moduleId: module.id,
  selector: 'user-group',
  templateUrl: './user-group.component.html',
  styleUrls:['./user-group.component.css']
})
export class UserGroup  {
  @Input() groups:Group[];
  @Input() user:User;
  @Input() loginUser:User;
  constructor(private userService:UserManageService ){

  }
  deleteGroup(gId:string) {
    this.userService.deleteGroup(this.user.id,gId);
  }
}
