import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings";

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController) {

  }
  
   navigateToSettingsPage(): void {
   this.navCtrl.push(SettingsPage);
}

}
