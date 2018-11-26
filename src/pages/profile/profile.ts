import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileData: Observable<any>

  constructor(private afAuth: AngularFireAuth,
    public app: App, private afData: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.afData.object(`profile/${data.uid}`).valueChanges()
      }
    })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.app.getRootNav().setRoot('LoginPage');
  }

}
