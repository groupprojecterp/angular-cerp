import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";
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
  book_code:string

  constructor(private _temp:BooksearchService ,private date_pipe:DatePipe,private dialog:MatDialog) { 
    
    this._temp.getBooks().snapshotChanges().subscribe(data=>{
      let book = data.map(d=>
        d.payload.doc.data())
      book = book.find(i=>i.book_id==this._temp.issueKey)
      
      this.title = book.title
      this.author = book.author
      this.pages = book.pages
      this.year = book.year
      this.book_code = book.book_id 
      console.log(this.title,book)
    })
    
    this.date = new Date();
    this.date.setDate(this.date.getDate()+10)
    this.dateString = date_pipe.transform(this.date,'dd-MM-yyyy')
    


  }
  getStatus(){
    if(this._temp.issue_is_there){
      this.dial()
      this._temp.issue_is_there=false;
    }
    return this._temp.issue_is_there
  }
  dial(){
    
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(DialogComponent, dialogConfig);
        
    
  }
  ngDoCheck(){
    
  }
  click_push(){
    this._temp.issue_push({
      book_id:this.book_code,
      student_id:this.studentId,
      return_date:this.dateString
    })
   
  }

  ngOnInit() {
  }

}