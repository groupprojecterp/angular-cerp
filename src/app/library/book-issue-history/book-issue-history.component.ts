import { Component, OnInit } from '@angular/core';
import {BooksearchService} from '../booksearch/booksearch.service';
@Component({
  selector: 'app-book-issue-history',
  templateUrl: './book-issue-history.component.html',
  styleUrls: ['./book-issue-history.component.css']
})
export class BookIssueHistoryComponent implements OnInit {
  issueHistoryList:IssueHistoryObj[]

  constructor(private search:BooksearchService) {
    
    search.getIssues().subscribe(data=>{
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
      
    
      
    }) 
    this.search.getBooks().subscribe(data=>{
        for(let i=0;i<data.length;i++){
          let val = data[i].payload.exportVal()
          for(let j=0;j<this.issueHistoryList.length;i++){
            if(val.book_id==this.issueHistoryList[j].book_id){
              this.issueHistoryList[j].book_title  val.title
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
            }
          }
        }
      })
    


   }

  ngOnInit() {
  }

}
interface IssueHistoryObj{
  student_name:string
  student_id:string
  book_title:string
  book_id:string
  return_date:string
}