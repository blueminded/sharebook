import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/ibook.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  //imageUrl: 'assets/img/cerebro-creativo.jpg',
  //imageUrl: 'assets/img/hombres-norte.jpg',

  constructor(private bookService: BooksService) {
    this.books = this.bookService.getAll();
  }

  ngOnInit(): void {}
}
