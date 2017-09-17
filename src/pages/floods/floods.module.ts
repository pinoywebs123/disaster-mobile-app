import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloodsPage } from './floods';

@NgModule({
  declarations: [
    FloodsPage,
  ],
  imports: [
    IonicPageModule.forChild(FloodsPage),
  ],
})
export class FloodsPageModule {}
