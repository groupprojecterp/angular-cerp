import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';

@Component({
  selector: 'app-book-return',
  templateUrl: './book-return.component.html',
  styleUrls: ['./book-return.component.css']
})
export class BookReturnComponent implements OnInit {

  constructor(private search:BooksearchService) { }

  ngOnInit() {
  }

}