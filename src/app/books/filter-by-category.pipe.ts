import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/models/book';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(books: Book[], selectedCategory: string): Book[] {
    return !selectedCategory ? books : books.filter(book => book.category === selectedCategory);
  }

}
