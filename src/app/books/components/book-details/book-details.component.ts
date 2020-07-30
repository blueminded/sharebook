import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  image: string;
  name: string;
  author: string;
  id: number;

  constructor(
    private bookService: BooksService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const book = this.bookService.getOne(parseInt(id, 10));
    this.imageUrl = book.imageUrl;
    this.name = book.name;
    this.author = book.author;
    this.id = book.id;
  }
}
