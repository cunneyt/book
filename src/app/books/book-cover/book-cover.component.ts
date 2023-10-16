import { Component, Input } from '@angular/core';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent {
  @Input() book: Book;
}
