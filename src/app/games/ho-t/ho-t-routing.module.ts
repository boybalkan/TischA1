import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoTPage } from './ho-t.page';

const routes: Routes = [
  {
    path: '',
    component: HoTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoTPageRoutingModule {}
