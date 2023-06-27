
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './model/Topic';
import { Course1 } from './model/course1';
import { Courset } from './model/Courset';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  // get(cid: number) {
  //   throw new Error('Method not implemented.');
  // }
  
 
  constructor(private http: HttpClient) { }

  addCourse(course: Course1): Observable<any> {
    const formData = new FormData();
    formData.append('title', course.title);
    formData.append('description', course.description);
    // formData.append('file', Topic as unknown as Blob);
    
    formData.append('imageFile', course.imageFile as Blob);
  
   
  
    return this.http.post("http://localhost:8081/courses", formData, { responseType: 'text' });
  }
  getCourses(): Observable<Courset[]> {
    return this.http.get<Courset[]>("http://localhost:8081/courses/viewAll");
  }

 



  // getCourseTopics(courseId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${courseId}/topics`);
  // }

  get(cid: number): Observable<any> {
    return this.http.get(`http://localhost:8081/courses/${cid}`);
  }

}