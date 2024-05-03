import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimetablesPageRoutingModule } from './timetables-routing.module';

import { TimetablesPage } from './timetables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimetablesPageRoutingModule
  ],
  declarations: [TimetablesPage]
})
export class TimetablesPageModule {}
