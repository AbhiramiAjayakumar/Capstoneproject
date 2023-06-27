import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Course1 } from '../model/course1';


@Component({
  selector: 'app-getcourse',
  templateUrl: './getcourse.component.html',
  styleUrls: ['./getcourse.component.css']
})
export class GetcourseComponent {
  cid:number=0
  a!:Course1
  constructor(private service:CourseService){}

  get(){


    this.service.get(this.cid).subscribe(

      (response: Course1) => {

       

          this.a = response as Course1;
          console.log(this.a)

         

      },

      (error) => {

        console.error("hai"+error);

       

      }

    );



      }

}
