import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolcanoPage } from './volcano';

@NgModule({
  declarations: [
    VolcanoPage,
  ],
  imports: [
    IonicPageModule.forChild(VolcanoPage),
  ],
})
export class VolcanoPageModule {}
