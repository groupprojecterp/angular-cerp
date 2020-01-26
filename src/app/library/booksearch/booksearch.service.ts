import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class BooksearchService {
  url = 'assets/books.json';
  clickedTitle:string
  constructor(private db:AngularFireDatabase) {
   
  }
  getBooks(){
    
    return this.db.list('/books').snapshotChanges();
     
  }

  clickedBook(){
    return this.clickedTitle;
  }

}
export class BooksData{
    
    author: string
    country: string
    imageLink: string
    language: string
    link: string
    pages: number
    title: string
    year: number
  
}