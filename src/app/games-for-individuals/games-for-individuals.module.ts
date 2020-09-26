import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesForIndividualsPageRoutingModule } from './games-for-individuals-routing.module';

import { GamesForIndividualsPage } from './games-for-individuals.page';


import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesForIndividualsPageRoutingModule
  ],
  declarations: [GamesForIndividualsPage, HeaderComponent, FooterComponent]
})
export class GamesForIndividualsPageModule {}
