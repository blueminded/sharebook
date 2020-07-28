import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ActionIconComponent } from './shared/components/action-icon/action-icon.component';
import { CardComponent } from './shared/components/card/card.component';
import { BookListComponent } from './books/components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionIconComponent,
    CardComponent,
    BookListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
