import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-book-issue-history',
  templateUrl: './book-issue-history.component.html',
  styleUrls: ['./book-issue-history.component.css']
})
export class BookIssueHistoryComponent implements OnInit {
  issueHistoryList:IssueHistoryObj[]

  constructor(private search:BooksearchService,private http:HttpClient) {
    
    search.getIssues().subscribe(data=>{
      this.issueHistoryList = new Array()
      for(let i=0;i<data.length;i++){
        let val = data[i].payload.exportVal()
        this.issueHistoryList.push({
          student_id:val.student_id,
          book_id:val.book_id,
          return_date:val.return_date,
          book_title:'',
          student_name:'',
          email:''
        })

      }
      
    
      
    }) 
    this.search.getBooks().subscribe(data=>{
        for(let i=0;i<data.length;i++){
          let val = data[i].payload.exportVal()
          for(let j=0;j<this.issueHistoryList.length;i++){
            if(val.book_id==this.issueHistoryList[j].book_id){
              this.issueHistoryList[j].book_title = val.title
            }
          }
        }
      })
      this.search.getStudents().subscribe(data=>{
        for(let i=0;i<data.length;i++){
          let val = data[i].payload.exportVal()
          for(let j=0;j<this.issueHistoryList.length;i++){
            if(val.student_id==this.issueHistoryList[j].student_id){
              this.issueHistoryList[j].student_id = val.name
              this.issueHistoryList[j].email = val.email
            }
          }
        }
      })
    


   }

  ngOnInit() {
  }
  sendMail(row){
    let url = 'https://us-central1-college-erp-668a1.cloudfunctions.net/sendMail?'
    url = url+'dest='+row.email
     this.http.get('dest=gudgudbadbadnew@gmail.com&title=%27harry%20potter%27&name=mustafa&date=22-22-20').subscribe()
  }

}
interface IssueHistoryObj{
  student_name:string
  student_id:string
  book_title:string
  book_id:string
  return_date:string
  email:string
}