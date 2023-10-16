import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/models/book';
import { BooksService } from 'src/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];
  categories: Set<string>;
  selectedCategory: string;
  constructor(private booksService: BooksService, private router: Router) {
    this.booksService.getBooks().subscribe(res => {
      this.books = res;
      this.categories = new Set(this.books.map(book => book.category))
    });
  }

  navigateToDetail(book: Book) {
    this.router.navigateByUrl(`book/${book.id}`, { state: book })
  }
  setSelectedCategory(event: any) {
    this.selectedCategory = event.target.value;
  }
}
