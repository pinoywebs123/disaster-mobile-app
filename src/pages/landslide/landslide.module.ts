import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandslidePage } from './landslide';

@NgModule({
  declarations: [
    LandslidePage,
  ],
  imports: [
    IonicPageModule.forChild(LandslidePage),
  ],
})
export class LandslidePageModule {}
