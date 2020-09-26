import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesFor4PageRoutingModule } from './games-for4-routing.module';

import { GamesFor4Page } from './games-for4.page';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesFor4PageRoutingModule
  ],
  declarations: [GamesFor4Page, HeaderComponent, FooterComponent]
})
export class GamesFor4PageModule {}
