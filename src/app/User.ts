
export class User
{
    fname:String;
    lname:String;
    email:String;
    checkin:String;
    checkout:String;
    guests:String;
    room:String;


    constructor(fname:String,lname:String, email:String,checkin:String,checkout:String,guests:String,room:String)
    {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.checkin =checkin;
        this.checkout =checkout;
        this.guests = guests;
        this.room = room;

    }


}