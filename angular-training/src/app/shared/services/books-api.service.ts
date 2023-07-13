import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private booksTestApiKey = 'AIzaSyAdXF570r_4pgCnlfT-TCnn1M_xLax4d-k';
  private booksApiUrl = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private http: HttpClient) {}

  getBooks(bookName: string): Observable<Array<Book>> {
    const query = `q=${encodeURIComponent(bookName)}&maxResults=3`;

    return this.http
      .get<{ items: Book[] }>(`${this.booksApiUrl}?${query}`)
      .pipe(map((books) => books.items || []));
  }

  getRandomBook(bookName: string) {
    const query = `q=${encodeURIComponent(bookName)}&maxResults=1`;

    return this.http.get(`${this.booksApiUrl}?${query}`);
  }
}
