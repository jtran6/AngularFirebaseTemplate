import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FirebaseFirestore } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-template';
  //public items2: Observable<AngularFirestoreDocument>;
  
  constructor(db: AngularFirestore)
  {
    //this.items2 = db.collection('/items').doc('h3B88FCEx52JaaqyFDze');
  }
  ngOnInit() {

  }
}
