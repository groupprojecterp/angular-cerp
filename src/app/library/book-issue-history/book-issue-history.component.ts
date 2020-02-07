import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import {FirebaseListObservable} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book-issue-history',
  templateUrl: './book-issue-history.component.html',
  styleUrls: ['./book-issue-history.component.css']
})
export class BookIssueHistoryComponent implements OnInit {
  issueHistoryList:IssueHistoryObj[]
  constructor(private search:BooksearchService,private http:HttpClient) {
    

    search.getIssues().snapshotChanges().subscibe(data=>{
      this.issueHistoryList = new Array()
      data.map(i=>i.payload.doc.data()).forEach(i=>this.issueHistoryList.push({
          student_id:i.student_id,
          book_id:i.book_id,
          return_date:i.return_date,
          book_title:'',
          student_name:'',
          email:''
        }))
      
      
      search.getStudents().snapshotChanges().subscibe(data=>{
        this.issueHistoryList.forEach(issue=>{
          data.map(i=>i.payload.doc.data()).forEach(j=>{
            if (issue.student_id==j.student_id){
              issue.student_name = j.name
            }
          })
        })
      }) 
      search.getBooks().snapshotChanges().subscibe(data=>{
          this.issueHistoryList.forEach(issue=>{
            data.map(i=>i.payload.doc.data()).forEach(j=>{
              if (issue.book_id==j.book_id){
                issue.book_title = j.title
              }
            })
          })
      }) 
    }) 
     


   }

  ngOnInit() {
  }
  sendMail(row){
    let url = 'https://us-central1-college-erp-668a1.cloudfunctions.net/sendMail?dest='+row.email+'&title='+row.book_title+'&name='+row.student_name+'&date'+row.return_date
    this.http.get(url).subscribe(console.log)
  }

}
class IssueHistoryObj{
  student_name:string
  student_id:string
  book_title:string
  book_id:string
  return_date:string
  email:string
}