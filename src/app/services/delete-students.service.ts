import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteStudentsService {

  url = 'http://localhost:8888/json-delete-student.php';

  constructor(private http: HttpClient) { }

  // Create getData() function thats makes http request
  postData(data: any) {
    
    console.log('student id:' +data)
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'text'
    });
  }
}