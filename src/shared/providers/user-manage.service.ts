/**
 * Created by fengjj on 2016/9/9.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http ,Response } from '@angular/http';
import {resolve} from "url";

import { Observable } from 'rxjs';
import  'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User ,UserInfo } from '../models/user-information.model'

const USER_URL = 'http://localhost:3000/assets/mock-data/mock-data.json';
//const USER_URL = 'https://www.baidu.com/';

@Injectable()
export class UserManageService {
  rawUserData = new BehaviorSubject<UserInfo>(null);
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:Http) {
    this.rawUserData.subscribe((data) => {
      if(data) {
        let users:User[] = [];
        data.forEach((d) => {
          users.push(new User(d));
        })
        this.userData.next(users);
      }
    })
  }
  getUsersFromServer() {
    return this.http.get(USER_URL).map((res:Response) => {
      return JSON.parse(res._body);
    });
  }
  getUsers() {
    console.log(this.getUsersFromServer());
    this.getUsersFromServer().subscribe((data) => {
      this.rawUserData.next(data);
    })
  }
}
