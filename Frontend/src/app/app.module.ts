import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FooterComponent } from './footer/footer.component';
// Add more Angular Material modules as per your requirements
import { HttpClientModule } from '@angular/common/http';
import { AdmincoursesComponent } from './admincourses/admincourses.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserComponent } from './user/user.component';

import { UpdateuserComponent } from './updateuser/updateuser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { UserenrollmentComponent } from './userenrollment/userenrollment.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { GetcourseComponent } from './getcourse/getcourse.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    SignupComponent,
    UserdashboardComponent,
    CoursesComponent,
    NavbarComponent,
    AdmindashboardComponent,
    FirstpageComponent,
    FooterComponent,
    AdmincoursesComponent,
    Navbar2Component,
   
SideNavComponent,
        UserComponent,
        UpdateuserComponent,
        GetuserComponent,
        UserenrollmentComponent,
        EnrollmentComponent,
        AddcourseComponent,
        UpdatecourseComponent,
        GetcourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,
   HttpClientModule,IonicModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
