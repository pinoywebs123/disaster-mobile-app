import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EarthquakePage } from './earthquake';

@NgModule({
  declarations: [
    EarthquakePage,
  ],
  imports: [
    IonicPageModule.forChild(EarthquakePage),
  ],
})
export class EarthquakePageModule {}
