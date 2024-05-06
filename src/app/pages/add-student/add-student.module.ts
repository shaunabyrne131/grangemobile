import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStudentPageRoutingModule } from './add-student-routing.module';

import { AddStudentPage } from './add-student.page';
import { AddStudentService } from 'src/app/services/add-student.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentPageRoutingModule
  ],
  declarations: [AddStudentPage],
  providers: [AddStudentService]
})
export class AddStudentPageModule {}
