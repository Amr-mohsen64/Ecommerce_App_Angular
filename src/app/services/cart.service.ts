import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from 'src/app/interfaces/good';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private firestore: AngularFirestore
    , private authServ: AuthService

  ) { }

  addToCart(data: Good) {
    return this.firestore.collection(`users/${this.authServ.userId}/cart`).add(data)
  }

  getCart() {
    return this.firestore.collection(`users/${this.authServ.userId}/cart`).snapshotChanges()
  }

  delete(id?: string) {
    return this.firestore.doc(`users/${this.authServ.userId}/cart/${id}`).delete()
  }

  save(id?: string, amount?: number) {
    return this.firestore.doc(`users/${this.authServ.userId}/cart/${id}`).update({
      amount: amount
    })
  }
}
