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

  /**
   * @type {Observable<Menu>} menu
   * @type {AngularFirestoreCollection<Menu>} menuCollection
   */
  menu: Observable < Menu | null > ;
  menuCollection: AngularFirestoreCollection < Menu > ;

  /**
   * @constructor MenuService
   * @param {AngularFirestore} afs
   */
  constructor(private afs: AngularFirestore) {
    this.menuCollection = this.afs.collection('menus');
  }

  /**
   * create void function
   * Add a new menu to menus collection.
   * @param {Menu} menuData
   * @memberof MenuService
   */
  create(menuData: Menu) {
    // Persist a document id
    const id = this.afs.createId();
    menuData.id = id;
    this.menuCollection.add(menuData);
  }

  /**
   * getByUserRef function
   * Get bunch of books by userRef
   * @param {any} userRef
   * @returns {AngularFirestoreCollection<Menu>} menuCollection
   * @memberof MenuService
   */
  getByUserRef(userRef) {
    return this.menuCollection = this.afs.collection('menus', ref => ref.where('user', '==', userRef));
  }

  /**
   * getByFilters void function.
   * Get books collections by filter params
   * @param {string} size
   * @param {string} category
   * @param {string} author
   * @param {number} minPrice
   * @param {number} maxPrice
   * @memberof MenuService
   */
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
