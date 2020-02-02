import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  description = "Book Issue Successful"
  constructor(private dialogRef: MatDialogRef<CourseDialogComponent>) { }
  close(){
    this.dialogRef.close()
  }
  ngOnInit() {
  }

}