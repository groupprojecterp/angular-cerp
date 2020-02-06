import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class BooksearchService {
  url = 'assets/books.json';
  issueKey:string
  constructor(private db:AngularFirestore) {
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
   let ref_issues = this.db.collection('issues')
   let ref_students = this.db.collection('students',ref=>ref.where('student_id','==',item.student_id))
   ref_students.get().forEach(data=>{
     if (data.size==1){
       ref_issues.add(ie)
     }
   })
    
    
    /*this.db.list('/students').snapshotChanges().subscribe(data=>{
      for(let i=0;i<data.length;i++){
        if(item.student_id==data[i].payload.exportVal().student_id){
          console.log(this.db.list('/issues').push(item),'assad')
          this.issue_is_there = true
        }
      }
    })
    */
   
    //if student id is found then push else display error
  }
  return_is_there = false
  return_book(book_id,student_id,date_string){
    this.db.list('issues').snapshotChanges().forEach(data=>{
        for(let i=0;i<data.length;i++){
          let val = data[i].payload.exportVal()
          if(val.book_id.includes(book_id) && val.student_id.includes(student_id)){
            this.db.list('issues').remove(data[i].key);
            this.return_is_there =true
          }
     }
    });
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