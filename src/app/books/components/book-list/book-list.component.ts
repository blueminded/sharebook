import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/ibook.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/cerebro-creativo.jpg',
      name: 'Cerebreo creativo',
      author: 'Joyce Holmes',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
    {
      imageUrl: 'assets/img/hombres-norte.jpg',
      name: 'Los hombres del norte',
      author: 'Jhon Haywood',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
