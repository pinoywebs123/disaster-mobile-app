import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TsunamiPage } from './tsunami';

@NgModule({
  declarations: [
    TsunamiPage,
  ],
  imports: [
    IonicPageModule.forChild(TsunamiPage),
  ],
})
export class TsunamiPageModule {}
