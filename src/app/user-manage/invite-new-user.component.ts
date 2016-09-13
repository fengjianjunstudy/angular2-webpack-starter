/**
 * Created by fengjj on 2016/9/13.
 */
import { Component  ,Input ,Output ,EventEmitter } from '@angular/core';

import { User } from '../../shared/models/user-information.model';
import { UserManageService } from '../../shared/providers/user-manage.service';
import {Group} from "../../shared/models/group-information.model";
@Component({
  moduleId: module.id,
  selector: "invite-new-user",
  templateUrl: './invite-new-user.component.html',
  styleUrls:['./invite-new-user.component.css']
})
export class InviteNewUser {
  @Output() closeModalEvent:EventEmitter = new  EventEmitter();
  onCloseModal(e:MouseEvent):void {
    this.closeModalEvent.emit();
  }
}
