import { Menu } from './../../../../models/menu';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: MenuItem[];
  //fireStoreMenus: Menu[];

  constructor(db: AngularFirestore) {
    //this.fireStoreMenus = db.collection("")
   }

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          icon : 'fa fa-home',
          routerLink: 'home'
      },
      {
          label: 'Contact Us',
          icon: 'fa fa-envelope',
          routerLink: 'contact-us'
      }
  ];
  }

}
