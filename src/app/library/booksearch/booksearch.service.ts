import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class BooksearchService {
  url = 'assets/books.json';
  issueKey:string
  constructor(private db:AngularFirestore) {
    this.issueKey = ''
    
    db.collection('books').snapshotChanges().subscribe(data=>{
      console.log(data.map(d=>{return d.payload.doc.data()}))
    })
    

  }
  getIssues(){
    return this.db.collection('issues');
  }
  getStudents(){
    return this.db.collection('students');
  }
  getBooks(){
    return this.db.collection('books');
  }
  issue_is_there = false

  issue_push(item){
   this.issue_is_there = false
   let ref_issues = this.db.collection('issues')
   let ref_students = this.db.collection('students',ref=>ref.where('student_id','==',item.student_id))
   let ref_book = this.db.collection('books',r=>r.where('book_id','==',item.book_id).limit(1))
   ref_book.snapshotChanges().subscribe(books=>{
     let book_and_id = books.map(i=>{
       return {id:i.payload.doc.id,book:i.payload.doc.data()}
     })

     ref_book.doc(book_and_id[0].id).update({
       quantitiy:(book_and_id[0].book.quantity as number -1)
     })
   })
   ref_students.get().forEach(data=>{
     if (data.size==1){
       ref_issues.add(item)
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
    let ref = this.db.collection('books',r=>r.where('title','==',title))
    ref.snapshotChanges().subscribe(d=>{
      let id = d.map(dx=>dx.payload.doc.id)[0]
      if (id!=''){
      ref.doc(id).delete()
      }
    })
  }

  
  push(obj){
    this.db.collection('books').add(obj);
  }

}
export class BooksData{
    key:string;
    author: string
    pages: number
    title: string
    year: number
}