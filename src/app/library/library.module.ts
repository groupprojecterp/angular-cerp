import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookMenuComponent } from './book-menu/book-menu.component';
import { BooksearchService } from './booksearch/booksearch.service';
import { FormsModule } from '@angular/forms';
import { BookAddComponent } from './book-add/book-add.component';
import {MatDialogModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {RouterModule,Routes} from  '@angular/router';
import { BookIssueHistoryComponent } from './book-issue-history/book-issue-history.component';
import { BookReturnComponent } from './book-return/book-return.component';

const routes:Routes=[
  {
    path:'',
    component:BooksearchComponent
  },
  {
    path:'add',
    component:BookAddComponent
  },
  {
    path:'search',
    component:BooksearchComponent
  },
  {
    path:'history',
    component:BookIssueHistoryComponent
  },
  {
    path:'return',
    component:BookReturnComponent
  }

]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[BooksearchComponent,BookAddComponent,BookIssueComponent,BookMenuComponent],
  declarations: [BooksearchComponent, BookIssueComponent, BookMenuComponent, BookAddComponent, DialogComponent, BookIssueHistoryComponent, BookReturnComponent],
  providers: [BooksearchService],
  entryComponents:[DialogComponent]
})
export class LibraryModule { }