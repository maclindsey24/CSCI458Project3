import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { Settings } from '../providers'
import { IonicStorageModule, Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { ExplorePage } from '../pages/explore/explore';
import { SearchPage } from '../pages/search/search';
import { FeedPage } from '../pages/feed/feed';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
//import { tabs-page } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { SettingsPage } from '../pages/settings/settings'

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

  export function provideSettings(storage: Storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new Settings(storage, {
      option1: true,
      option2: 'Rewind',
      option3: '3',
      option4: 'Hello'
    });
  }

  export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    SearchPage,
    FeedPage,
    ProfilePage,
    AboutPage,
    //TabsPage
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FileTransfer,
    File,
    Camera
  ]
  
})
export class AppModule {}
