import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesForIndividualsPageRoutingModule } from './games-for-individuals-routing.module';

import { GamesForIndividualsPage } from './games-for-individuals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesForIndividualsPageRoutingModule
  ],
  declarations: [GamesForIndividualsPage]
})
export class GamesForIndividualsPageModule {}
