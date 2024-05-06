import { Component, OnInit } from '@angular/core';
import { GetLecturersService } from 'src/app/services/get-lecturers.service';

@Component({
  selector: 'app-list-lecturers',
  templateUrl: './list-lecturers.page.html',
  styleUrls: ['./list-lecturers.page.scss'],
})
export class ListLecturersPage implements OnInit {

  constructor(private getLecturerService: GetLecturersService) { }

  lecturers: any

  getLecturerData() {
    // Get the information from the API using Observable
    // by subscribing to the studentservice Observable 
    this.getLecturerService.getData().subscribe(result => {
    this.lecturers = result;
    const lecturersArray = this.lecturers.lecturers
    this.lecturers = lecturersArray

    });
  }

  ngOnInit() {
    this.getLecturerData()
  }

}
