import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Comment } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  comments: Comment[] = [];
  IsFetchDone = false;

  constructor(private blogService: BlogService) {}

  toggleFetchDone(): void {
    this.getComments();
    this.IsFetchDone = !this.IsFetchDone;
  }

  getComments(): void {
    this.blogService
      .getComments()
      .subscribe(({ comments }) => (this.comments = comments));
  }
}
