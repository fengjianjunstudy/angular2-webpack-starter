/**
 * Created by fengjj on 2016/9/12.
 */
import { Component ,Input ,Output ,EventEmitter } from '@angular/core';

import { User } from '../../shared/models/user-information.model';
import { UserManageService } from '../../shared/providers/user-manage.service';
@Component({
  moduleId: module.id,
  selector: 'user-left',
  templateUrl: './user-left.component.html',
  styleUrls:['./user-left.component.css']
})
export class UserLeft {
  @Input() users:User[];
  @Input() curUser:User;
  @Input() loginUser:User;
  @Output() inviteUserEvent:EventEmitter = new EventEmitter();
  constructor(private userService:UserManageService) {

  }
  changeUser(u:User) {
    this.userService.changeCurrentUser(u);
  }
  onInviteUser():void {
    this.inviteUserEvent.emit();
  }
}
