import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotlinePage } from './hotline';

@NgModule({
  declarations: [
    HotlinePage,
  ],
  imports: [
    IonicPageModule.forChild(HotlinePage),
  ],
})
export class HotlinePageModule {}
