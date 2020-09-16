import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesFor4PageRoutingModule } from './games-for4-routing.module';

import { GamesFor4Page } from './games-for4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesFor4PageRoutingModule
  ],
  declarations: [GamesFor4Page]
})
export class GamesFor4PageModule {}
