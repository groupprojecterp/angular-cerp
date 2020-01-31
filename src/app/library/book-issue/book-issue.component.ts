import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css'],
  providers: [DatePipe]
})
export class BookIssueComponent implements OnInit {
  author: string
  pages: number
  title: string
  year: number
  studentId:string
  date:Date
  dateString:string

  constructor(private _temp:BooksearchService ,private date_pipe:DatePipe) { 
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
    this.date = new Date();
    this.date.setDate(this.date.getDate()+1)
    this.dateString = 
    date_pipe.transform(this.date,'dd-MM-yyyy')


  }
  ngDoCheck(){
    
  }


  ngOnInit() {
  }

}