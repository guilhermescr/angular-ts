import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../components/blog/blog';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogUrl = 'https://simple-blog-api-v3aa.onrender.com/blog';

  constructor(private http: HttpClient) {}

  getComments(): Observable<Blog> {
    return this.http.get<Blog>(this.blogUrl);
  }
}
