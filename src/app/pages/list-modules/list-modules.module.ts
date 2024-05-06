import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListModulesPageRoutingModule } from './list-modules-routing.module';

import { ListModulesPage } from './list-modules.page';
import { GetModulesService } from 'src/app/services/get-modules.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListModulesPageRoutingModule
  ],
  declarations: [ListModulesPage],
  providers: [GetModulesService]
})
export class ListModulesPageModule {}
