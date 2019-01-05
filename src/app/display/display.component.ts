import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
public displayArr : any[]=[];
  constructor(public userser : UserService) { }

  ngOnInit() {
    this.displayArr = this.userser.userArr;
    console.log(this.displayArr);
  }

}
