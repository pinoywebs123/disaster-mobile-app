import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
 lat : any;
 long: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps,private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
    this.lat =  resp.coords.latitude;
     this.long = resp.coords.longitude;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  ngAfterViewInit() {
    this.loadMap();
  }
  ionViewDidEnter(){
    this.loadMap();
  }

loadMap() {
 let element: HTMLElement = document.getElementById('map');
 let map: GoogleMap = this.googleMaps.create(element);


 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
    let position: CameraPosition = {
      target: {
              lat: this.lat,
              lng: this.long
            },
      zoom: 16,
      tilt: 30
 
    };
    map.moveCamera(position); 
          let markeroptions : MarkerOptions = {
        position: {
          lat: this.lat,
          lng: this.long
        },
        title: "Im here!"
      };

      let marker = map.addMarker(markeroptions).then((marker : Marker)=> {
        marker.showInfoWindow();
      });
   })

 

}

}
