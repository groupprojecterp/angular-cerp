import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {LibraryModule} from './library/library.module';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import {BooksearchComponent} from './library/booksearch/booksearch.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCOI_ADergL8vTGejoQ7FSSRFs0-5OaaLo",
  authDomain: "college-erp-668a1.firebaseapp.com",
  databaseURL: "https://college-erp-668a1.firebaseio.com",
  projectId: "college-erp-668a1",
  storageBucket: "college-erp-668a1.appspot.com",
  messagingSenderId: "213936368738",
  appId: "1:213936368738:web:5d5aa5f2c7ebe273cb353b",
  measurementId: "G-Y6856SNJCK"
};

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,LibraryModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,
  AngularFirestoreModule],
  declarations: [ AppComponent, LoginComponent,AccountsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
