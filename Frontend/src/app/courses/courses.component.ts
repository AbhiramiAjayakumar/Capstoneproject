import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Courset } from '../model/Courset';
import { Course1 } from '../model/course1';
import * as $ from 'jquery';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
  courses: Courset[] = [];
  selectedcourse: Courset | undefined;

  
  constructor(private service:CourseService,private router: Router){}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.service.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
  Showcourse(course:Courset):void{
    this.selectedcourse=course;
    
}

}
