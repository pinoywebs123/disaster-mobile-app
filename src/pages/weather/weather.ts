import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the WeatherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  data : any;
  data2 : any;
  search = "Quezon City";
  baseUrl = "Quezon City";
 
  lat: any;
  long: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherProv : WeatherProvider, private geolocation: Geolocation) {
   
    
  }

 

 
  ionViewDidLoad() {
    
    this.weatherProv.getWeather(this.baseUrl).subscribe(data2 => {
      console.log(this.data2 = data2.current_observation);
    });

   

  }

  searchCity(){
    this.weatherProv.getSearch(this.search).subscribe(data2 => {
      console.log(this.data2 = data2.current_observation);
    });
    
   
  }
  



}
