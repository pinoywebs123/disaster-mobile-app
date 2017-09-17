import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuclearPage } from './nuclear';

@NgModule({
  declarations: [
    NuclearPage,
  ],
  imports: [
    IonicPageModule.forChild(NuclearPage),
  ],
})
export class NuclearPageModule {}
