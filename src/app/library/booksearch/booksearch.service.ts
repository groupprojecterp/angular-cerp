import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class BooksearchService {
  url = 'assets/books.json';
  clickedTitle:string
  constructor(private db:AngularFireDatabase) {
   
  }
  getBooks(){
    
    return this.db.list('/books').snapshotChanges();
     
  }
  
  delete(title){
    this.db.list('books').snapshotChanges().subscribe(data=>{
        for(let i=0;i<data.length;i++){
       
       if(data[i].payload.exportVal().title.includes(title)){

         this.db.list('books').remove(data[i].key);
         console.log(data[i].key)
       }
     }
    });
  }

  clickedBook(){
    return this.clickedTitle;
  }
  push(obj){
    this.db.list('books').push(obj);
  }

}
export class BooksData{
    
    author: string
    pages: number
    title: string
    year: number
  
}