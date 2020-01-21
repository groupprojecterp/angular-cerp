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

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,LibraryModule],
  declarations: [ AppComponent, LoginComponent,AccountsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
