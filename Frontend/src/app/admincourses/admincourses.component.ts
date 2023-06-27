import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Courset } from '../model/Courset';
import { Course1 } from '../model/course1';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-admincourses',
  templateUrl: './admincourses.component.html',
  styleUrls: ['./admincourses.component.css']
})
export class AdmincoursesComponent {
CreatenewCourse() {
  this.router.navigate(['/addcourse']);

}

  courses: Courset[] = [];
  selectedcourse: Courset | undefined;

  // constructor(private service: ProductService) {}
  constructor(private service:CourseService,private router: Router){}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.service.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
}