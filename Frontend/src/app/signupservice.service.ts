import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  url='http://localhost:8001/api/user';

  constructor(private http: HttpClient) { }
  postUser(data:any){
    return this.http.post(this.url,data);
  }
}
