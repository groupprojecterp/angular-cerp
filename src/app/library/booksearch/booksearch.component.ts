import { Component, OnInit } from '@angular/core';
import {BooksearchService,BooksData} from './booksearch.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  booksData:BooksData[]
  booksSearch:BooksData[]
  booksKey:string[]
  bookEntered:string
  isClicked:boolean
  constructor(private _search:BooksearchService,private db:AngularFireDatabase,dbstore:AngularFirestore) {
    this._search.getBooks().subscribe(
      data=>{
        this.booksSearch = new Array();
        

        for(let i=0;i<data.length;i++){
          this.booksSearch.push(data[i].payload.exportVal())
        }
        
      }
    );
    
    
   }
   clicked(title){
     this.isClicked = true;
     this._search.clickedTitle = title;
   }
   delete(title){
     this._search.delete(title);
   }
   find(){
     this._search.getBooks().subscribe
     (data=>this.find_book(data,this.bookEntered));
   }
   find_book(data,book){
     this.booksSearch=new Array();
     for(let i=0;i<data.length;i++){
       
       if(data[i].payload.exportVal().title.includes(book)){
         this.booksSearch.push(data[i].payload.exportVal());
         
       }
     }
   }

 
  
  ngOnInit() {
  }

}