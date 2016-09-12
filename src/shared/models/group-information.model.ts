/**
 * Created by fengjj on 2016/9/9.
 */
import { DataSet } from './dataset.model';
export interface BaseGroup {
  id:string;
  group_name:string;
}
export interface GroupInfo extends BaseGroup {
  members:string[];
  datasets:DataSet[];
}
