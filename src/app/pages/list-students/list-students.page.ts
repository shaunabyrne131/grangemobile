import { Component, OnInit } from '@angular/core';
import { GetStudentsService } from 'src/app/services/get-students.service';
import { DeleteStudentsService } from 'src/app/services/delete-students.service';
import { Student } from 'src/app/models/student';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.page.html',
  styleUrls: ['./list-students.page.scss'],
})
export class ListStudentsPage implements OnInit {

  students: any;
  newStudent = new Student();

  constructor(private router: Router, private getStudentService: GetStudentsService, private deleteStudentService: DeleteStudentsService) { }

  getStudentData() {
    // Get the information from the API using Observable
    // by subscribing to the studentservice Observable 
    this.getStudentService.getData().subscribe(result => {
    this.students = result;
    const studentsArray = this.students.students
    this.students = studentsArray

    });
  }

  deleteStudentById(studentId: Number) {
    this.deleteStudentService.postData(studentId).subscribe(
      res => {
        console.log("Success: Student has been deleted" + res);
        const filteredArray = this.students.filter((student: Student) => student.studentID != studentId)
        this.students = filteredArray
        // this.dismiss(true);
      },
      async err => {
        console.log(err.message);
      }
    );
  }

  redirectToUpdatePage(student: Student){
    let navigationExtras: NavigationExtras = {
      state: {
      student: student
      }
      };

      this.router.navigate(['update-student'], navigationExtras);

  }


  ngOnInit() {
    this.getStudentData();
  }

}
