import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormstestformPage } from './formstestform.page';

const routes: Routes = [
  {
    path: '',
    component: FormstestformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormstestformPageRoutingModule {}
