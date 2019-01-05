import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userData = {fname:"", lname:"", email:"", pwd:"" };
  constructor(public userser : UserService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    //console.log(form.value);
    
    this.userData.fname = form.value.fname;
    this.userData.lname = form.value.lname;
    this.userData.email = form.value.umail;
    this.userData.pwd = form.value.upass;
    //console.log(this.userData);
    this.userser.getUserData(this.userData);

    form.reset();

  }

}
