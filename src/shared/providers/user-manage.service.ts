/**
 * Created by fengjj on 2016/9/9.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http ,Response ,RequestOptions } from '@angular/http';
import {resolve} from "url";

import { Observable } from 'rxjs';
import  'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { User ,UserInfo } from '../models/user-information.model';
import { GroupInfo } from '../models/group-information.model';
import {Group} from "../models/group-information.model";

const USER_URL = '/assets/mock-data/mock-data.json';
const Group_URL = '/assets/mock-data/mock-group-data.json';
//const USER_URL = 'https://www.baidu.com/';

@Injectable()
export class UserManageService {
  rawUserData = new BehaviorSubject<User[]>(null);
  rawGroupData = new BehaviorSubject<GroupInfo[]>(null);
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  groupData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:Http) {
    this.rawUserData.subscribe((data) => {
      if(data) {
        let users:User[] = [];
        for(let d of data) {
          users.push(new User(d));
        }
        this.userData.next(users);
      }
    });
    this.rawGroupData.subscribe((data:GroupInfo[]) => {
      if(data) {
        let gs:Group[] = [];
        for(let g of data) {
          gs.push(new Group(g));
        }
        this.groupData.next(gs);
      }
    })
  }
  getUsersFromServer() {
    return this.http.get(USER_URL).map((res:Response) => {
      return res.json();
    })
      .catch(this.handleError);
  }
  getUsers() {
    this.getUsersFromServer().subscribe((data) => {
      this.rawUserData.next(data);
    })
  }
  private getGroupsFromServer() {
    return this.http.get(Group_URL).map((res:Response) => {
      return res.json();
    })
      .catch(this.handleError);
  }
  getGroups(ids:string[]) {
    this.getGroupsFromServer().subscribe((data:GroupInfo[]) => {
      let groups:GroupInfo[] = [];
      for(let id of ids) {
        for(let g of data) {
          if(g.id === id) {
            groups.push(g);
          }
        }
      }
      this.rawGroupData.next(groups);
    });
  }
  private getGroupFromServer(id:string) {
    return this.http.get(Group_URL+'?id='+id).map((res:Response) => {
      console.log(res);
    })
    .catch(this.handleError);
  }
  getGroup(id) {
    this.getGroupFromServer(id).subscribe(data => {
      console.log(data);
    })
  }
  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    if(!error.json) {
      console.error(error);
    }
    return Observable.throw(error.json().error || 'Server error');
  }
}
