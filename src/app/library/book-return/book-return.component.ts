import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import {DialogComponent} from "../dialog/dialog.component";
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-book-return',
  templateUrl: './book-return.component.html',
  styleUrls: ['./book-return.component.css']
})
export class BookReturnComponent implements OnInit {
  student_id:string
  book_code:string
  date_string:string
  status:string
  constructor(private _temp:BooksearchService) {
    this.status  = ''
   }

  ngOnInit() {
  }
  click_push(){
    this._temp.return_book(this.book_code,this.student_id,this.date_string)
    this.getStatus()
  }
  getStatus(){
    if (this._temp.return_is_there){
      this.status = "Returned Successfully"
      console.log('returned')
      //setTimeout(()=>{ this.status = "" }, 4000)
      this._temp.return_is_there = false
    }else{
      this.status = ''
    }
  }
  

}