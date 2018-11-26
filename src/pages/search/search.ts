import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings"

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Lil Wayne',
      'Farris Swisher',
      'Mac Lizzy',
      'Brockhampton',
      'theneedledrop'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  navigateToSettingsPage(): void {
    this.navCtrl.push(SettingsPage);
 }

}
