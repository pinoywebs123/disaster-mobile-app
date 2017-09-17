import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  url : string;
  url2 : string;
  baseUrl : string;
  constructor(public http: Http) {
    
    this.url = "http://api.wunderground.com/api/6a47c670129f25ab/forecast/q/PH/";
    this.url2 = "http://api.wunderground.com/api/6a47c670129f25ab/conditions/q/PH/";
  }

  getWeatherForecast(defu){
    return this.http.get(this.url+defu+".json").map(res => res.json());
  }

  getWeather(defu2){
    return this.http.get(this.url2+defu2+".json").map(res => res.json());
  }

  getSearch(search){
    return this.http.get(this.url2+search+".json").map( res=> res.json());
  }
  getSearch2(search){
    return this.http.get(this.url+search+".json").map( res=> res.json());
  }
}
