import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentsService {

  url = 'http://localhost:8888/json-update-student.php';

  
  constructor(private http: HttpClient) { }

 
  postData(data: any) {

    
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'text'
    });
  }
}
