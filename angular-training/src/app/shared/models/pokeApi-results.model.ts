export interface Results {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
}
