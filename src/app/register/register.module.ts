import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';


import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, HeaderComponent, FooterComponent]
})
export class RegisterPageModule {}
