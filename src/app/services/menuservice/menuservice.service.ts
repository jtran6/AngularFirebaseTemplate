import {
  Injectable
} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import {
  Observable
} from 'rxjs';
import {
  Menu
} from '../../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  menu: Observable < Menu | null > ;
  menuCollection: AngularFirestoreCollection < Menu > ;

  constructor(private afs: AngularFirestore) {
    this.menuCollection = this.afs.collection('menus');
  }

  create(menuData: Menu) {
    // Persist a document id
    const id = this.afs.createId();
    menuData.id = id;
    this.menuCollection.add(menuData);
  }

  getByUserRef(userRef) {
    return this.menuCollection = this.afs.collection('menus', ref => ref.where('user', '==', userRef));
  }

  getByFilters(size: string, category: string, author: string, minPrice: number, maxPrice: number) {
    return this.menuCollection = this.afs.collection < Menu > ('menus', ref => {
      // Compose a query using multiple .where() methods
      return ref
        .where('size', '==', size)
        .where('category', '==', category)
        .where('author', '==', author)
        .where('price', '>', minPrice)
        .where('price', '<', maxPrice);
    });
  }

}
