import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SirenPage } from './siren';

@NgModule({
  declarations: [
    SirenPage,
  ],
  imports: [
    IonicPageModule.forChild(SirenPage),
  ],
})
export class SirenPageModule {}
