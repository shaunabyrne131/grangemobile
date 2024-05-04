import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageboardPage } from './messageboard.page';

const routes: Routes = [
  {
    path: '',
    component: MessageboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageboardPageRoutingModule {}
