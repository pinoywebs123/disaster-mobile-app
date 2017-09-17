import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiresPage } from './fires';

@NgModule({
  declarations: [
    FiresPage,
  ],
  imports: [
    IonicPageModule.forChild(FiresPage),
  ],
})
export class FiresPageModule {}
