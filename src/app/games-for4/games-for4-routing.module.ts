import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesFor4Page } from './games-for4.page';

const routes: Routes = [
  {
    path: '',
    component: GamesFor4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesFor4PageRoutingModule {}
