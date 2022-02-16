import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDn_TWffNnaRu33C1TyJVv2C7hXac8RwYQ",
  authDomain: "market-ee1b3.firebaseapp.com",
  projectId: "market-ee1b3",
  storageBucket: "market-ee1b3.appspot.com",
  messagingSenderId: "82527295986",
  appId: "1:82527295986:web:d55c13754db6906c4e736b",
  measurementId: "G-DSSDXHQJE6"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
