import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }


  addNewUser(id: any, name: any, address: any) {
    return this.firestore.doc(`users/${id}`).set({
      name: name,
      address: address
    })
  }
}
