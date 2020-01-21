import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookMenuComponent } from './book-menu/book-menu.component';
import { BooksearchService } from './booksearch/booksearch.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[BooksearchComponent],
  declarations: [BooksearchComponent, BookIssueComponent, BookMenuComponent],
  providers: [BooksearchService]
})
export class LibraryModule { }