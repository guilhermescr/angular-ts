import { Component } from '@angular/core';
import { Task, TaskWithDate } from './task/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Go to Grocery Shop',
      description: 'Get some apples and oranges',
      showTodaysDate: false,
    },
    {
      id: 2,
      title: 'Learn something new',
      description: 'Buy an online course',
      showTodaysDate: false,
    },
    {
      id: 3,
      title: 'Help people',
      description: 'Donate money to a child care center',
      showTodaysDate: false,
    },
  ];

  addNewItem({ id, todaysDate }: TaskWithDate): void {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          showTodaysDate: true,
          todaysDate,
        };
      } else {
        return task;
      }
    });
  }
}
