import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-menu',
  templateUrl: './book-menu.component.html',
  styleUrls: ['./book-menu.component.css']
})
export class BookMenuComponent implements OnInit {

  constructor() { }
  width='0px'
  
  ngOnInit() {
  }
  openNav(){
    this.width='200px'
  }
  closeNav(){
    this.width='0px'
  }
}