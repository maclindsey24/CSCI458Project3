import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { SearchPage } from '../search/search';
import { FeedPage } from '../feed/feed';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage(
{
  name: 'tabs-page'
}
)

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = ExplorePage;
  tab3Root = SearchPage;
  tab4Root = ProfilePage;
  tab5Root = AboutPage;

  constructor(private afAuth: AngularFireAuth) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => console.log(data))
  }
}
