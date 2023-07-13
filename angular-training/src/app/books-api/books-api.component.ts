import { Component } from '@angular/core';
import { BooksApiService } from '../shared/services/books-api.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/models/book.model';
import { Store } from '@ngrx/store';
import { BooksApiActions } from './state/books.actions';
import { selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-books-api',
  templateUrl: './books-api.component.html',
  styleUrls: ['./books-api.component.scss'],
})
export class BooksApiComponent {
  books$ = this.store.select(selectBooks);
  book!: Book;
  bookIdentifier = 'design';

  constructor(private booksApiService: BooksApiService, private store: Store) {
    this.booksApiService.getBooks(this.bookIdentifier).subscribe((books) => {
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
    });

    this.booksApiService
      .getRandomBook(this.bookIdentifier)
      .subscribe((response: any) => {
        const item: any = response.items[0];

        this.book = {
          id: item.id,
          volumeInfo: {
            thumbnailSrc: item.volumeInfo.imageLinks.thumbnail,
            title: item.volumeInfo.title,
            rating: item.volumeInfo.averageRating,
            authors: item.volumeInfo.authors,
            categories: item.volumeInfo.categories,
            description: item.volumeInfo.description,
          },
        };
      });
  }
}
