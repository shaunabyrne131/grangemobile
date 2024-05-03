import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimetablesPage } from './timetables.page';

const routes: Routes = [
  {
    path: '',
    component: TimetablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimetablesPageRoutingModule {}
