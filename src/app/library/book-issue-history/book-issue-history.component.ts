import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
import {FirebaseListObservable} from '@angular/fire/database';

@Component({
  selector: 'app-book-issue-history',
  templateUrl: './book-issue-history.component.html',
  styleUrls: ['./book-issue-history.component.css']
})
export class BookIssueHistoryComponent implements OnInit {
  issueHistoryList:IssueHistoryObj[]
  constructor(private search:BooksearchService) {
    

    search.getIssues().forEach(data=>{
      this.issueHistoryList = new Array()
      for(let i=0;i<data.length;i++){
        let val = data[i].payload.exportVal()
        this.issueHistoryList.push({
          student_id:val.student_id,
          book_id:val.book_id,
          return_date:val.return_date,
          book_title:'',
          student_name:''
        })

      }
      
      search.getStudents().forEach(data=>{
      for(let i=0;i<data.length;i++){
        var val = data[i].payload.exportVal()
        
        for(let j=0;j<this.issueHistoryList.length;j++){
      
          if(this.issueHistoryList[j].student_id==val.student_id){
            this.issueHistoryList[j].student_name=val.name
          }
        }

      }

    }) 
    search.getBooks().forEach(data=>{
      for(let i=0;i<data.length;i++){
        var val = data[i].payload.exportVal()
        
        for(let j=0;j<this.issueHistoryList.length;j++){
      
          if(this.issueHistoryList[j].book_id==val.book_id){
            this.issueHistoryList[j].book_title=val.title
          }
        }

      }

    })
    }) 
     


   }

  ngOnInit() {
  }

}
class IssueHistoryObj{
  student_name:string
  student_id:string
  book_title:string
  book_id:string
  return_date:string
}