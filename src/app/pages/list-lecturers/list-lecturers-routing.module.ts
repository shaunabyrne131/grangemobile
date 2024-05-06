import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLecturersPage } from './list-lecturers.page';

const routes: Routes = [
  {
    path: '',
    component: ListLecturersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLecturersPageRoutingModule {}
