import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  {
    path: 'book', component: BooksComponent,
  },
  { path: 'book/:id', component: BookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
