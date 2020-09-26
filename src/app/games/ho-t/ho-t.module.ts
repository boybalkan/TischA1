import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoTPageRoutingModule } from './ho-t-routing.module';

import { HoTPage } from './ho-t.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';








@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoTPageRoutingModule
  ],
  declarations: [HoTPage, HeaderComponent, FooterComponent]
})
export class HoTPageModule {}
