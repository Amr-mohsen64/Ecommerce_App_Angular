import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GoodsService {

  constructor(private firestore: AngularFirestore
    , private storage: AngularFireStorage) {

  }

  getAllGoods() {
    return this.firestore.collection("goods").snapshotChanges()
  }

  addNewGood(name?: string, price?: number, image?: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref('goods/' + image?.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe((photoUrl) => {
          this.firestore.collection('goods').add({
            name,
            price,
            photoUrl
          }).then(() => resolve("added"))
        })
      })
    })
  }
}
