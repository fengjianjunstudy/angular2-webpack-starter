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
  rawUserData = new BehaviorSubject<User[]>(null);
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:Http) {
    this.rawUserData.subscribe((data) => {
      if(data) {
        let users:User[] = [];
        for(let d of data) {
          users.push(new User(d));
        }
        this.userData.next(users);
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
  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    if(!error.json) {
      console.error(error);
    }
    return Observable.throw(error.json().error || 'Server error');
  }
}
