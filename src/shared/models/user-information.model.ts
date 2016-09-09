/**
 * Created by fengjj on 2016/9/9.
 */
import { BaseGroup } from './group-information.model';
export const enum ROLE{
  admin,
  user
}
export interface BaseUser {
  id:string;
  user_name:string;
}
export interface UserInfo extends BaseUser{
  section:string;
  email:string;
  position:string;
  tel:number;
  auth:ROLE;
  groups:BaseGroup[];
}
export class User implements UserInfo {
  id:string;
  user_name:string;
  section:string;
  email:string;
  position:string;
  tel:number;
  auth:ROLE;
  groups:BaseGroup[];
  constructor(user) {
    this.id = user.id;
    this['user_name'] = user['user_name'];
    this.section = user.section;
    this.email = user.email;
    this.tel = user.tel;
    this.position = user.position;
    this.groups = user.groups;
    this.auth = user.auth;
  }
}
