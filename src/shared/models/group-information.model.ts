/**
 * Created by fengjj on 2016/9/9.
 */
import { DataSet } from './dataset.model';
export interface BaseGroup {
  id:string;
  groupName:string;
}
export interface GroupInfo extends BaseGroup {
  members?:string[];
  datasets?:DataSet[];
}

export class Group implements GroupInfo {
  id:string;
  groupName:string;
  members:string[];
  datasets:DataSet[];
  constructor(obj:GroupInfo) {
    this.id = obj.id;
    this.groupName = obj.groupName;
    if(obj.members) {
      this.members = obj.members;
    }
    if(obj.datasets) {
      this.datasets = obj.datasets;
    }
  }

}
