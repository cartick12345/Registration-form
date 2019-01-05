import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public userArr:any[]=[];
  constructor() { }

  getUserData(recobj){

    this.userArr.push(recobj);
    console.log(this.userArr);
  }
}
