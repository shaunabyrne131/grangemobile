import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStudentsService {

    // Create url to json-data-students
    url = 'http://localhost:8888/json-data-students.php';

    // Inject HttpClient module into Constructor
    constructor(private http: HttpClient) { }
  
    // Create getData() function thats makes http request
    getData(){
      // Make http request using Http Client;
      return this.http.get(this.url);
    }
}
