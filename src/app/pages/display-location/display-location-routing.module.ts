import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayLocationPage } from './display-location.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayLocationPageRoutingModule {}
