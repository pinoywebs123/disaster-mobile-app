import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SafetyPage } from '../pages/safety/safety';
import { SirenPage } from '../pages/siren/siren';
import { WeatherPage } from '../pages/weather/weather';
import { HotlinePage } from '../pages/hotline/hotline';
import { FirstPage } from '../pages/first/first';
import { MapPage } from '../pages/map/map';
import { MainPage } from '../pages/main/main';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { FiresPage } from '../pages/fires/fires';
import { EarthquakePage } from '../pages/earthquake/earthquake';
import { FloodsPage } from '../pages/floods/floods';
import { LandslidePage } from '../pages/landslide/landslide';
import { NuclearPage } from '../pages/nuclear/nuclear';
import { TsunamiPage } from '../pages/tsunami/tsunami';
import { TyphoonPage } from '../pages/typhoon/typhoon';
import { VolcanoPage } from '../pages/volcano/volcano';
import { SurvivalPage } from '../pages/survival/survival';

import { WeatherProvider } from '../providers/weather/weather';
import { MapProvider } from '../providers/map/map';
import { HttpModule } from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeAudio } from '@ionic-native/native-audio';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SafetyPage,
    SirenPage,
    WeatherPage,
    HotlinePage,
    FirstPage,
    MapPage,
    MainPage,
    AboutPage,
    ContactPage,
    FiresPage,
    EarthquakePage,
    FloodsPage,
    LandslidePage,
    NuclearPage,
    TsunamiPage,
    TyphoonPage,
    VolcanoPage,
    SurvivalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SafetyPage,
    SirenPage,
    WeatherPage,
    HotlinePage,
    FirstPage,
    MapPage,
    MainPage,
    AboutPage,
    ContactPage,
    FiresPage,
    EarthquakePage,
    FloodsPage,
    LandslidePage,
    NuclearPage,
    TsunamiPage,
    TyphoonPage,
    VolcanoPage,
    SurvivalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    MapProvider,
    GoogleMaps,
    Geolocation,
    NativeAudio
  ]
})
export class AppModule {}
