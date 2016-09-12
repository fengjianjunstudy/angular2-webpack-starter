/**
 * Created by fengjj on 2016/9/9.
 */
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
  groups:string[];
}
export class User implements UserInfo {
  id:string;
  user_name:string;
  section:string;
  email:string;
  position:string;
  tel:number;
  auth:ROLE;
  groups:string[] = [];
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
  deleteGroup(gId:string) {
    let index = this.groups.indexOf(gId);
    if(index>-1) {
      //let g = this.groups.splice(index,1).slice();
      //console.log(g === this.groups)
      this.groups = ["g_5","g_6"]
    }
  }
  clone(u:User) {
    return new User(u);
  }
}
