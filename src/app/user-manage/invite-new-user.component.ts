/**
 * Created by fengjj on 2016/9/13.
 */
import { Component  ,Input ,Output ,EventEmitter ,OnInit } from '@angular/core';

import { User } from '../../shared/models/user-information.model';
import { UserManageService } from '../../shared/providers/user-manage.service';
import {Group} from "../../shared/models/group-information.model";
@Component({
  moduleId: module.id,
  selector: "invite-new-user",
  templateUrl: './invite-new-user.component.html',
  styleUrls:['./invite-new-user.component.css']
})
export class InviteNewUser implements OnInit {
  initUser = new User({
    "id":"",
    "user_name":"name",
    "email":"email",
    "auth":1,
    "groups":[]
  })
  groups:Group[];
  @Output() closeModalEvent:EventEmitter<any> = new  EventEmitter(null);
  constructor(private userService:UserManageService) {}
  ngOnInit() {
    let groups = this.userService.getAllGroups();
    if(groups) {
      this.groups = groups;
    }
  }
  onSubmit() {
    this.userService.addNewUser(this.initUser);
    this.onCloseModal(null);
  }
  onCloseModal(e:any):void {
    this.closeModalEvent.emit();
  }
}
