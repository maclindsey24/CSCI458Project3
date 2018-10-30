import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs'; import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  arrData = []
  myInput

  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    this.fdb.list("/Feed/").valueChanges().subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });
  }

  btnAddClicked(){
    this.fdb.list("/Feed/").push(this.myInput);
  }

}
