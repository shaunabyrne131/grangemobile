import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStudentsPageRoutingModule } from './list-students-routing.module';

import { ListStudentsPage } from './list-students.page';
import { GetStudentsService } from 'src/app/services/get-students.service';
import { DeleteStudentsService } from 'src/app/services/delete-students.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListStudentsPageRoutingModule
  ],
  declarations: [ListStudentsPage],
  providers: [GetStudentsService, DeleteStudentsService]
})
export class ListStudentsPageModule {}
