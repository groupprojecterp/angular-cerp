import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {
  author: string
  country: string
  imageLink: string
  language: string
  link: string
  pages: number
  title: string
  year: number
  constructor(private _temp:BooksearchService) { 
    
  }
  ngDoCheck(){
    this.title = this._temp.clickedBook();
    this._temp.getBooks().subscribe(this.setDetails);
  }
  setDetails(data){
    for(let i=0;i<data.length;i++){
       if(data[i].title.includes(this.title)){
          this.author = data[i].author;
        
          this.country= data[i].country
          this.imageLink=data[i].imageLink
          this.language= data[i].language
          this.link= data[i].link
          this.pages= data[i].pages
          this.title= data[i].title
          this.year= data[i].year
          console.log(data[i])
       }
     }
  }

  ngOnInit() {
  }

}