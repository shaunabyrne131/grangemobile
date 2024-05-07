import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  url = 'http://localhost:8888/json-create-students.php';

  
  constructor(private http: HttpClient) { }

  postData(data: any) {
  
    console.log(data)
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'text'
    });
  }
}
