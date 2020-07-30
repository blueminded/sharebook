import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { IBook } from '../../models/ibook.interface';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  name: string;
  author: string;
  imageUrl: string;

  constructor(private bookService: BooksService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const id = this.bookService.getAll().length;
    const newBook: IBook = {
      name: this.name,
      author: this.author,
      imageUrl: this.imageUrl,
      id,
    };

    this.bookService.addNew(newBook);
    this.router.navigate(['']);
  }
}
