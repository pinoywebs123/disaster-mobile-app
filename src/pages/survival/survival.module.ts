import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurvivalPage } from './survival';

@NgModule({
  declarations: [
    SurvivalPage,
  ],
  imports: [
    IonicPageModule.forChild(SurvivalPage),
  ],
})
export class SurvivalPageModule {}
