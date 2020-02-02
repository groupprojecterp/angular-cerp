import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class BooksearchService {
  url = 'assets/books.json';
  issueKey:string
  constructor(private db:AngularFireDatabase) {
    this.issueKey = ''
   

  }
  getIssues(){
    return this.db.list('/issues').snapshotChanges();
  }
  getStudents(){
    return this.db.list('/students').snapshotChanges();
  }
  getBooks(){
    
    return this.db.list('/books').snapshotChanges();
     
  }
  issue_is_there = false
  issue_push(item){
   this.issue_is_there = false
    this.db.list('/students').snapshotChanges().subscribe(data=>{
      for(let i=0;i<data.length;i++){
        if(item.student_id==data[i].payload.exportVal().student_id){
          this.db.list('/issues').push(item)
          this.issue_is_there = true
        }
      }
    })
    
   
    //if student id is found then push else display error
  }
  
  delete(title){
    this.db.list('books').snapshotChanges().subscribe(data=>{
        for(let i=0;i<data.length;i++){
       
       if(data[i].payload.exportVal().title.includes(title)){

         this.db.list('books').remove(data[i].key);
        
         
       }
     }
    });
  }

  
  push(obj){
    this.db.list('books').push(obj);
  }

}
export class BooksData{
    key:string;
    author: string
    pages: number
    title: string
    year: number
}