import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListModulesPage } from './list-modules.page';

const routes: Routes = [
  {
    path: '',
    component: ListModulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListModulesPageRoutingModule {}
