import { Component } from '@angular/core';
import { Task, TaskWithDate } from './task/task';
import tasks from './tasks.json';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = tasks;

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
