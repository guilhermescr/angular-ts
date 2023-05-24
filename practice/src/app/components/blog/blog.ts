export interface Comment {
  id: number;
  author: string;
  body: string;
}

export interface Blog {
  comments: Comment[];
  posts: any[];
  users: any[];
  credits: {};
}
