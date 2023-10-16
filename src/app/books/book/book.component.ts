import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book: Book;
  constructor(private router: Router) {
    this.book = <Book>this.router.getCurrentNavigation()?.extras.state;
  }
}
