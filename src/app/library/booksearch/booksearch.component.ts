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

  constructor(private _search:BooksearchService) {
    
    _search.getBooks().subscribe(this.setData);
  
   }
   
   find(){
     console.log(this.booksData[0])
   }
   setData(data){
     this.booksData = new Array();
     for(let i=0;i<data.length;i++){
      this.booksData.push({
        author: data[i].author,
        country: data[i].country,
        imageLink: data[i].imageLink,
        language: data[i].language,
        link: data[i].link, 
        pages: data[i].pages,
        title: data[i].title,
        year: data[i].year
        
      });
     }
     this.booksSearch=this.booksData;
     
   }

  ngOnInit() {
  }

}