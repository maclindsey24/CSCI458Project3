import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(result);
      if (result){
        this.navCtrl.setRoot('tabs-page');
      }
    }
    catch (e){
      this.toast.create({
        message: 'Wrong email or password!',
        duration: 3000
      }).present();
      console.error(e);
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  forgotPage() {
    this.navCtrl.push('ForgotPage');
  }

}
