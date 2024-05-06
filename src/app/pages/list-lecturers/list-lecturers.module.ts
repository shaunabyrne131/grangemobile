import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLecturersPageRoutingModule } from './list-lecturers-routing.module';

import { ListLecturersPage } from './list-lecturers.page';
import { GetLecturersService } from 'src/app/services/get-lecturers.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLecturersPageRoutingModule
  ],
  declarations: [ListLecturersPage],
  providers: [GetLecturersService]
})
export class ListLecturersPageModule {}
