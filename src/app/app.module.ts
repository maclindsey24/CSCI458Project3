import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ExplorePage } from '../pages/explore/explore';
import { SearchPage } from '../pages/search/search';
import { FeedPage } from '../pages/feed/feed';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
//import { tabs-page } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

const firebaseAuth = {
    apiKey: "AIzaSyAoCwR4BYLaUXQ1zZCvz1u12SfuuEnFeiU",
    authDomain: "rewind-authentication.firebaseapp.com",
    databaseURL: "https://rewind-authentication.firebaseio.com",
    projectId: "rewind-authentication",
    storageBucket: "rewind-authentication.appspot.com",
    messagingSenderId: "33445113378"
  };

  var config = {
    apiKey: "AIzaSyAoCwR4BYLaUXQ1zZCvz1u12SfuuEnFeiU",
    authDomain: "rewind-authentication.firebaseapp.com",
    databaseURL: "https://rewind-authentication.firebaseio.com",
    projectId: "rewind-authentication",
    storageBucket: "rewind-authentication.appspot.com",
    messagingSenderId: "33445113378"
  };

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    SearchPage,
    FeedPage,
    ProfilePage,
    AboutPage,
    //TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    SearchPage,
    FeedPage,
    ProfilePage,
    AboutPage,
    //tabs-page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
