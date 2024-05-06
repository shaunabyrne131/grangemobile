import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStudentPageRoutingModule } from './update-student-routing.module';

import { UpdateStudentPage } from './update-student.page';
import { UpdateStudentsService } from 'src/app/services/update-students.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStudentPageRoutingModule
  ],
  declarations: [UpdateStudentPage],
  providers: [UpdateStudentsService]
})
export class UpdateStudentPageModule {}
