import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageboardPageRoutingModule } from './messageboard-routing.module';

import { MessageboardPage } from './messageboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageboardPageRoutingModule
  ],
  declarations: [MessageboardPage]
})
export class MessageboardPageModule {}
