import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { CreateBookComponent } from './books/components/create-book/create-book.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: CreateBookComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
