import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  image: string = 'assets/img/cerebro-creativo.jpg';
  name: string = 'Demo Name';
  author: string = 'Demo Author';

  constructor() {}

  ngOnInit(): void {}
}
