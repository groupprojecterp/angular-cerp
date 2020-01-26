import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  isViewBooks:boolean;
  isAddBook:boolean;
  title:string;
  author:string;
  year:number;
  pages:number;

  constructor(private _search:BooksearchService) { 
    this.isAddBook = false;
    this.isViewBooks = false;
    this.title = ''
    this.author = ''
    this.year = null
    this.pages = null
  }

  ngOnInit() {
  }
  viewBooksClick(){
    this.isViewBooks = !this.isViewBooks
    this.isAddBook = false;
  }
  addBookClick(){
    this.isAddBook = !this.isAddBook
    this.isViewBooks = false;
  }
  addBook(){
    if(this.title!='' && this.author!='' && this.year!=null && this.pages!=null ){
      this._search.push({
        title:this.title,
        author:this.author,
        pages:this.pages,
        year:this.year
        });
    }
  }

}