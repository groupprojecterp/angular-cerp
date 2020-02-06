import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  
  title:string;
  author:string;
  year:number;
  pages:number;
  vColor:string;
  aColor:string;
  book_code:string;
  number:number;
  constructor(private _search:BooksearchService) { 
    this.isAddBook = false;
    this.isViewBooks = false;
    this.title = ''
    this.author = ''
    this.year = null
    this.pages = null
    this.vColor = 'w3-button w3-blue w3s-cell'
    this.aColor = 'w3-button w3-blue w3-cell'
    this.number = 0
  }
  onKeyPress(){
    if(this.number<0){
      this.number = 0
    }
  }
  ngOnInit() {
  }
  viewBooksClick(){
    this.isViewBooks = !this.isViewBooks
    this.isAddBook = false;
    this.vColor = 'w3-button w3-grey w3-cell'
    this.aColor = 'w3-button w3-blue w3-cell'
  }
  addBookClick(){
    this.isAddBook = !this.isAddBook
    this.isViewBooks = false;
    this.vColor = 'w3-button w3-blue w3-cell'
    this.aColor = 'w3-button w3-grey w3-cell'
  }
  addBook(){
    if(this.title!='' && this.author!='' && this.year!=null && this.pages!=null ){
      this._search.push({
        title:this.title,
        author:this.author,
        pages:this.pages,
        year:this.year,
        book_id:this.book_code,
        quantity:this.number
        });
      this.title  = ''
      this.author = ''
      this.pages  = null
      this.year   = null
      this.book_code=''
      this.number = 0
    }
  }

}