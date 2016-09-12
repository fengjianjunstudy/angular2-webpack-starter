/**
 * Created by fengjj on 2016/9/12.
 */
import { Component ,Input  , Output , EventEmitter  } from '@angular/core';

import { Group } from '../../shared/models/group-information.model';
import { User } from '../../shared/models/user-information.model'
@Component({
  moduleId: module.id,
  selector: 'user-group',
  templateUrl: './user-group.component.html',
  styleUrls:['./user-group.component.css']
})
export class UserGroup  {
  @Input() groups:Group[];
  @Input() user:User;
  @Output() deleteGroupEvent:EventEmitter<string> = new EventEmitter();
  deleteGroup(gId:string) {
    this.deleteGroupEvent.emit(gId);
  }
}
