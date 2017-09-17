import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FiresPage } from '../fires/fires';
import { EarthquakePage } from '../earthquake/earthquake';
import { FloodsPage } from '../floods/floods';
import { LandslidePage } from '../landslide/landslide';
import { NuclearPage } from '../nuclear/nuclear';
import { TsunamiPage } from '../tsunami/tsunami';
import { TyphoonPage } from '../typhoon/typhoon';
import { VolcanoPage } from '../volcano/volcano';
import { SurvivalPage } from '../survival/survival';

/**
 * Generated class for the SafetyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safety',
  templateUrl: 'safety.html',
})
export class SafetyPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ionViewDidLoad() {
      
     };

  clickEarthquake(){
    this.navCtrl.push(EarthquakePage);
  }   

  clickFires(){
    this.navCtrl.push(FiresPage);
  }

  clickFloods(){
    this.navCtrl.push(FloodsPage);
  }

  clickLandslide(){
    this.navCtrl.push(LandslidePage);
  }

  clickNuclear(){
    this.navCtrl.push(NuclearPage);
  }

  clickTsunami(){
    this.navCtrl.push(TsunamiPage);
  }

  clickTyphoon(){
    this.navCtrl.push(TyphoonPage);
  }

  clickVolcano(){
    this.navCtrl.push(VolcanoPage);
  }

  clickSurvival(){
    this.navCtrl.push(SurvivalPage);
  }

  }


