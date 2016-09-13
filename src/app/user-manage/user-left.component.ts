/**
 * Created by fengjj on 2016/9/12.
 */
import { Component ,Input ,Output ,EventEmitter ,OnChanges ,SimpleChanges} from '@angular/core';

import { User } from '../../shared/models/user-information.model'
@Component({
  moduleId: module.id,
  selector: 'user-left',
  templateUrl: './user-left.component.html',
  styleUrls:['./user-left.component.css']
})
export class UserLeft implements OnChanges {
  @Input() users:User[];
  @Input() curUser:User;
  @Output() changeCurUserEvent:EventEmitter<any> = new EventEmitter(null);
  ngOnChanges(changes:SimpleChanges) {
    console.log(this.users);
  }
  changeUser(u:User) {
    this.changeCurUserEvent.emit(u);
  }
}
