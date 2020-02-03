import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DialogComponent} from "../dialog/dialog.component";
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-book-return',
  templateUrl: './book-return.component.html',
  styleUrls: ['./book-return.component.css']
})
export class BookReturnComponent implements OnInit {

  constructor(private _temp:BooksearchService,private dialog:MatDialog) { }

  ngOnInit() {
  }
  getStatus(){
    if(this._temp.return_is_there){
      this.dial()
      this._temp.return_is_there=false;
    }
    return this._temp.return_is_there
  }
  dial(){
    
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(DialogComponent, dialogConfig);
        
    
  }

}