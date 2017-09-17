import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafetyPage } from '../safety/safety';
import { SirenPage } from '../siren/siren';
import { WeatherPage } from '../weather/weather';
import { HotlinePage } from '../hotline/hotline';
import { FirstPage } from '../first/first';
import { MapPage } from '../map/map';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  
  }

  clickInfo(){
    this.navCtrl.push(MainPage);
    console.log("click info");
  }

  clickSafety(){
    this.navCtrl.push(SafetyPage);
  }

  clickSiren(){
    this.navCtrl.push(SirenPage);
  }

  clickWeather(){
    this.navCtrl.push(WeatherPage);
  }

  clickHotline(){
    this.navCtrl.push(HotlinePage);
  }

  clickFirst(){
    this.navCtrl.push(FirstPage);
  }

  clickMap(){
    this.navCtrl.push(MapPage);
  }

}
