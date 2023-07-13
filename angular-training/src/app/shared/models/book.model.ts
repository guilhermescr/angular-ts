export interface Book {
  id: string;
  volumeInfo: {
    imageLinks?: {
      thumbnail?: string;
    };
    thumbnailSrc: string;
    title: string;
    rating: number;
    authors: string[];
    categories: string[];
    description: string;
  };
}
