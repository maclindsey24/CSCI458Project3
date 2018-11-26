import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Account } from "../../models/account";
/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private afData: AngularFireDatabase,
    public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
    //this.userId = this.afAuth.auth.currentUser.uid;
  }

  async userName() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afData.object(`profile/${auth.uid}`).set(this.account)
        .then(() => this.app.getRootNav().setRoot('LoginPage'));
    })
  }

}
