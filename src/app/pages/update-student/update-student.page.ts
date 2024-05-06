import { Component, OnInit } from '@angular/core';
import { UpdateStudentsService } from 'src/app/services/update-students.service';
import { ModalController } from '@ionic/angular';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {

  student: any

  constructor(private route: ActivatedRoute, private router: Router, private updateStudentService: UpdateStudentsService, private modalCtrl: ModalController) {
    this.route.queryParams.subscribe(params => {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
        this.student = currentNavigation.extras.state['student'];
    }
});
  }

 updateStudent(student: Student) {
    this.updateStudentService.postData(student).subscribe(
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
      this.modalCtrl.dismiss(this.student);
    } else {
      this.modalCtrl.dismiss();
    }
  }

  ngOnInit() {
  }

}
