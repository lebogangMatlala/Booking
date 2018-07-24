import { Component, OnInit } from '@angular/core';
import arrUser from '../arrayUser';
import { User} from '../User';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrUser=[];

  AddUser(fname,lname,email,checkin,checkout,adults,children,room){
 
    arrUser[0]=fname;
    arrUser[1]=lname;
    arrUser[2]=email;
    arrUser[3]=checkin;
    arrUser[4]=checkout;
    arrUser[5]=adults;
    arrUser[6]=children;
    arrUser[7]=room;

 
    /*alert(arrUser)
    console.log(arrUser);*/

    for (let i in arrUser) {
      console.log(i);
   }
    return false;
  }

  updateUser(name,surname,emailAdress,inDate,outDate,adult,childrens,rooms)
  {

     /* if(arrUser != null)
      {
        if(arrUser.indexOf(fname)==0)
        {
          arrUser.splice(0,1,name);
        }
        else if()
        {

        }
        else if()
        {
          
        }
        else if()
        {
          
        }
        else if()
        {
          
        }
        else if()
        {
          
        }
        else if()
        {
          
        }
        else if()
        {
          
        }
    
     
      
        alert(arrUser)
        console.log(arrUser);
      }
      else{
        alert("updated")
      } */

     
  }



}
