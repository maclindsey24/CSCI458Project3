import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings"

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {

  constructor(public navCtrl: NavController) {

  }
  navigateToSettingsPage(): void {
    this.navCtrl.push(SettingsPage);
 }

}
