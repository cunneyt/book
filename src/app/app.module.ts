import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookCoverComponent } from './books/book-cover/book-cover.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { FilterByCategoryPipe } from './books/filter-by-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookCoverComponent,
    BooksComponent,
    BookComponent,
    FilterByCategoryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
