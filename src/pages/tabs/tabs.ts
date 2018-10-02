import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { SearchPage } from '../search/search';
import { FeedPage } from '../feed/feed';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = ExplorePage;
  tab3Root = SearchPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
