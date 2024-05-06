import { Component, OnInit } from '@angular/core';
import { AddStudentService } from 'src/app/services/add-student.service';
import { Student } from 'src/app/models/student';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  
  newStudent = new Student()

  constructor(private addStudentService: AddStudentService, private modalCtrl: ModalController) { }

  addStudent() {
    //console.log(this.newStudent);
    // Make a post request using the studentcreate service and subscribe to the
    // response in order to inform the user of the outcome. In this case, we just
    // go back to the previous page
    this.addStudentService.postData(this.newStudent).subscribe(
      res => {
        console.log("Success: Record has been added" + res);
        this.dismiss(true);
      },
      async err => {
        console.log(err.message);
      }
    );
  }

  dismiss(returnStudent: boolean) {
    if (returnStudent) {
      this.modalCtrl.dismiss(this.newStudent);
    } else {
      this.modalCtrl.dismiss();
    }
  }

  ngOnInit() {
  }

}
