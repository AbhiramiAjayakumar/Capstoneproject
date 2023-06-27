import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupserviceService } from '../signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  

 

  constructor(private http:HttpClient,private service:SignupserviceService){}

  uid: number=0;
  uname: string='';
  uemail: string='';
  upassword: string='';
  // uconfirmpwd: string='';

  SignUp():void

  {

   

    const user={uname:this.uname,uemail:this.uemail,upassword:this.upassword}

    this.service.postUser(user).subscribe(

      response => { console.log('Data sent successfully');

       // Handle the response from the backend if needed

      },

       error => {

         console.error('Error sending data', error);

       });

         // Handle any errors that occurred during the request } );







}

}



  