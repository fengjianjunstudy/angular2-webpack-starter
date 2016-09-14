/**
 * Created by fengjj on 2016/9/12.
 */
import { Component  ,Input ,OnChanges,SimpleChanges} from '@angular/core';

import { User } from '../../shared/models/user-information.model';
import { UserManageService } from '../../shared/providers/user-manage.service';
import {Group} from "../../shared/models/group-information.model";
@Component({
  moduleId: module.id,
  selector: 'user-right',
  templateUrl: './user-right.component.html',
  styleUrls:['./user-right.component.css']
})
export class UserRight implements OnChanges {
  @Input() user:User;
  @Input() loginUser:User;
  groups:Group[] = [];
  constructor(private userService:UserManageService) {
    this.userService.groupData.subscribe((data:Group[]) => {
      this.groups = data;
    })
  }
  ngOnChanges(changes:SimpleChanges) {
    if(changes['user'].currentValue && changes['user'].currentValue.groups) {
      //当user有值且groups数组存在时去获取group的具体信息
      this.userService.getGroups(changes['user'].currentValue.groups);
    }
  }
  onDeleteUser() {
    this.userService.deleteUser();
  }
}
