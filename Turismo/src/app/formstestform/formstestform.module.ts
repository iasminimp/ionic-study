import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormstestformPageRoutingModule } from './formstestform-routing.module';

import { FormstestformPage } from './formstestform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormstestformPageRoutingModule
  ],
  declarations: [FormstestformPage]
})
export class FormstestformPageModule {}
