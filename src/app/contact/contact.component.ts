import { Component, OnInit } from '@angular/core';
import arrUser from '../arrayUser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrUser=[]

  AddMsg(name,emailAddress,phoneNum,msg,date)
  {
    
    arrUser[0] = name;
    arrUser[1] = emailAddress;
    arrUser[2] = phoneNum;
    arrUser[3] = msg;
    arrUser[4] = date;

    alert(arrUser);
    console.log(arrUser);
  }

}
