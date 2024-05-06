import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayLocationPageRoutingModule } from './display-location-routing.module';

import { DisplayLocationPage } from './display-location.page';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayLocationPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [DisplayLocationPage]
})
export class DisplayLocationPageModule {}
