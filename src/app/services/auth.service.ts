import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user: Observable<firebase.User | null>
  userId:string = ""

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user
  }

  signUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  login(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logOut() {
    return this.afAuth.signOut()
  }
}
