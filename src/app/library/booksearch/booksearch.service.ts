import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BooksearchService {
  url = 'assets/books.json';
  clickedTitle:string
  constructor(private _http:HttpClient) {
    
  }
  getBooks(){
    return this._http.get<BooksData>(this.url);
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