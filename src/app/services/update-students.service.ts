import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentsService {

  url = 'http://localhost:8888/json-update-student.php';

  // Inject HttpClient module into Constructor
  constructor(private http: HttpClient) { }

  // Create getData() function thats makes http request
  postData(data: any) {
    // Make http request using Http Client;
    //alert(data['studentID']);
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'text'
    });
  }
}
