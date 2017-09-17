import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the SirenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siren',
  templateUrl: 'siren.html',
})
export class SirenPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('siren', 'audio/siren.mp3');
  }
  
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad SirenPage');
  }

  

  clickPlay2(){
    this.nativeAudio.play('siren');
  }

  clickStop(){
    this.nativeAudio.stop('siren');

  }

  
}
