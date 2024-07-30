import { Injectable } from '@angular/core';
import { _users } from '../Data-files/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getusers() {
    const jsonString = localStorage.getItem('_users');
    if (jsonString) {
      return JSON.parse(jsonString);
    }

    const jsonStringuser = JSON.stringify(_users);
    localStorage.setItem('_users', jsonStringuser);
    return _users;
  }
  Adduser(obj: any) {
    const users = JSON.parse(localStorage.getItem('_users') || '[]');
    if (obj._id == 0) {
      obj._id = this.getId();
      users.push(obj);
    }
    else {
      users[obj._id] = obj
    }
    localStorage.setItem('_users', JSON.stringify(users));

    return true;
  }
  userId(id:any){
    let users = this.getusers()
    for(let p of users){
      if(p._id == id){
        console.log(p);
        return p
      }
    }
  }
  getId() {
    const users = JSON.parse(localStorage.getItem('_users') || '[]');
    return (Number(users.pop()?._id || 0)) + 1;
  }
}
