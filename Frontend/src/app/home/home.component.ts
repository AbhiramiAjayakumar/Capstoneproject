import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   password!: String;
   name!:String;
  
  constructor(private router: Router) {}

  signup()
  {
    this.router.navigate(['/signup']);
  }
  checkPassword() {
    
    // if(this.name ==='admin' && this.password==='admin')
    
     this.router.navigate(['/admindashboard']);
  }
}
// else
// {
//   this.loginService.checkUser(this.name).subscribe(
//     (response)=>
//    {
//       if(response.exists)
//       {
//         TouchList.router.navigate(['/userdashboard']);
//        }
//       }
//  );

    
