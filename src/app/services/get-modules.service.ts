import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetModulesService {

       
        url = 'http://localhost:8888/json-data-modules.php';
        constructor(private http: HttpClient) { }
        getData(){
          return this.http.get(this.url);
        }
}
