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
import {HttpClient} from '@angular/common/http';

 let firebaseConfig = null
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,LibraryModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,
  AngularFirestoreModule],
  declarations: [ AppComponent, LoginComponent,AccountsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule {
  url='https://us-central1-college-erp-668a1.cloudfunctions.net/getObj';
  
  constructor(private _http:HttpClient){
    _http.get(this.url).subscribe(data=>{
      firebaseConfig = data
    });
    
  }
 }
