export interface Task {
  id: number;
  title: string;
  description: string;
  showTodaysDate: boolean;
  todaysDate?: string;
}

export interface TaskWithDate {
  id: number;
  todaysDate: string;
}
