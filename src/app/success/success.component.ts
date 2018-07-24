import { Component, OnInit } from '@angular/core';
import arrUser from '../arrayUser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  removed:string;

  fname=arrUser[0];
  lname=arrUser[1];
  email=arrUser[2];
  checkin=arrUser[3];
  checkout=arrUser[4];
  adults=arrUser[5];
  children=arrUser[6]
  room=arrUser[7];

  delete(fname)
  {
    if(fname)
    {
      fname= arrUser.splice(arrUser.indexOf(fname), 8);
      alert("User information of "+ fname +" is deleted")
      console.log(arrUser);
    }
    
  
  }

  /*update(name,lname,email,checkin,checkout,adults,children,room)
  {

    let newName= arrUser[0].name;
    let newSurname =arrUser[1].lname;

   
      arrUser.splice(arrUser.indexOf(newName),1,name);
      arrUser.splice(arrUser.indexOf(newSurname),1,lname);
    
      console.log(arrUser);
  }*/
  

}
