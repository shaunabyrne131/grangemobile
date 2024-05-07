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
    this.addStudentService.postData(this.newStudent).subscribe(
      res => {
        alert("Success: Record has been added" + res);
        this.dismiss(true);
      },
      async err => {
        alert(err.message);
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
