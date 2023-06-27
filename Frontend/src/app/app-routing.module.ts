import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AdmincoursesComponent } from './admincourses/admincourses.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FooterComponent } from './footer/footer.component';
import { GetcourseComponent } from './getcourse/getcourse.component';
import { GetuserComponent } from './getuser/getuser.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserenrollmentComponent } from './userenrollment/userenrollment.component';


const routes: Routes = [{ path: '', redirectTo: 'firstpage', pathMatch: 'full' },
{path:'home',component:HomeComponent},

{path:'signup',component:SignupComponent},
{ path: 'userdashboard', component:UserdashboardComponent },
{ path: 'admindashboard', component:AdmindashboardComponent },
{path:'courses',component:CoursesComponent},
{path:'firstpage',component:FirstpageComponent},
{path :'admincourses',component:AdmincoursesComponent},
{path: 'user',component:UserComponent},
{path: 'updateuser',component:UpdateuserComponent},
{path: 'getuser',component:GetuserComponent},
{path: 'userenrollment',component:UserenrollmentComponent},
{path: 'enrollment',component:EnrollmentComponent},
{path: 'addcourse',component:AddcourseComponent},
// {path: 'updatecourse',component:UpdatecourseComponent},
{path: 'getcourse',component:GetcourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
