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
  constructor(private _search:BooksearchService) { 
    this.isAddBook = false;
    this.isViewBooks = false;
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

}