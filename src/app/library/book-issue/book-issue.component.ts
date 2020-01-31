import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {
  author: string
  pages: number
  title: string
  year: number
  constructor(private _temp:BooksearchService) { 
    this._temp.getBooks().subscribe(data=>{
      for(let i=0;i<data.length;i++){
        if(data[i].key==this._temp.issueKey){
          let b = data[i].payload.exportVal()
          this.title = b.title
          this.author = b.author
          this.pages = b.pages
          this.year = b.year 
        }
      }
    })
    this.title = 'Harry Potter';
    this.author = 'jk rowling';
    this.pages = 300;
    this.year = 2019;

  }
  ngDoCheck(){
    
  }


  ngOnInit() {
  }

}