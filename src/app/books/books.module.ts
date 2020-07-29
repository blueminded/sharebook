import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';



@NgModule({
  declarations: [BookListComponent, CreateBookComponent, BookDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
