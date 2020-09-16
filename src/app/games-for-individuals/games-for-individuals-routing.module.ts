import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesForIndividualsPage } from './games-for-individuals.page';

const routes: Routes = [
  {
    path: '',
    component: GamesForIndividualsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesForIndividualsPageRoutingModule {}
