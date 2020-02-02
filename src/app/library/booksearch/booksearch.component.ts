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
  booksKey:any[]
  bookEntered:string
  clickedTitle:string
  toShowIssue:boolean

  constructor(private _search:BooksearchService,private db:AngularFireDatabase,dbstore:AngularFirestore) {
    this._search.getBooks().subscribe(
      data=>{
        this.booksSearch = new Array();
        this.booksKey = new Array();
        for(let i=0;i<data.length;i++){
          let b = data[i].payload.exportVal()
          this.booksSearch.push({
            key:data[i].key,
            author:b.author,
            title:b.title,
            pages:b.pages,
            year:b.year,
            book_id:b.book_id
            })
         
          
        }
      
      }
    );
    
    
   }
   

  showDetails(title){
    if(this.clickedTitle==title){
      this.clickedTitle=''
      this.isClicked = false
    }else{
      this.isClicked = true
      this.clickedTitle = title
      }
  }
  issueClicked(key){
    this.toShowIssue = true
    this._search.issueKey = key
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
     this.booksKey = new Array();
     for(let i=0;i<data.length;i++){
       
       if(data[i].payload.exportVal().title.toLowerCase().includes(book)){
         let b = data[i].payload.exportVal()
         this.booksSearch.push({
            key:data[i].key,
            author:b.author,
            title:b.title,
            pages:b.pages,
            year:b.year,
            book_id:b.book_id
            });
         
       }
     }
   }

 
  
  ngOnInit() {
  }

}