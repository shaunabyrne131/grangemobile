import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  url = 'http://localhost:8888/json-create-students.php';

  // Inject HttpClient module into Constructor
  constructor(private http: HttpClient) { }

  // Create getData() function thats makes http request
  postData(data: any) {
    // Make http request using Http Client;
    //alert(data['studentID']);
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
