import { Injectable } from '@angular/core';
import { IBook } from '../models/ibook.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  bookList: IBook[] = [];

  constructor() {}

  getAll(): IBook[] {
    return this.bookList;
  }

  addNew(book: IBook): void {
    this.bookList.push(book);
  }

  remove(index: number): void {}

  getOne(index: number): IBook {
    return this.bookList[index];
  }
}
