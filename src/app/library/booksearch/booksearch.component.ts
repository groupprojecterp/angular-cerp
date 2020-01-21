import { Component, OnInit } from '@angular/core';
import {BooksearchService,BooksData} from './booksearch.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  booksData:BooksData[]
  booksSearch:BooksData[]
  bookEntered:string
  isClicked:boolean
  constructor(private _search:BooksearchService) {
    this._search.getBooks().subscribe(data=>this.booksSearch=data);
      
   }
   clicked(){
     this.isClicked = true;
   }
   find(){
     this._search.getBooks().subscribe(data=>this.find_book(data,this.bookEntered));
   }
   find_book(data,book){
     this.booksSearch=new Array();
     for(let i=0;i<data.length;i++){
       if(data[i].title.includes(book)){
         this.booksSearch.push(data[i]);
       }
     }

   }

 
   setData(data){
     this._search.getBooks().subscribe(data=>this.booksData=data);
     
     
   }

  ngOnInit() {
  }

}