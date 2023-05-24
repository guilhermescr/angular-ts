import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskWithDate } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() taskProp!: Task;
  @Output() todaysDateEvent = new EventEmitter<TaskWithDate>();

  getTodaysDate(): string {
    const newDate = new Date();
    const date = newDate.toLocaleDateString('pt-BR');
    const time = `${newDate.getHours()}:${newDate.getMinutes()}`;
    const timeConvention = newDate.getHours() <= 11 ? 'A.M' : 'P.M';
    return `${date}, at ${time} ${timeConvention}.`;
  }

  addTodaysDate(userId: number): void {
    const todaysDate: string = this.getTodaysDate();
    const taskWithDate: TaskWithDate = {
      id: userId,
      todaysDate,
    };
    this.todaysDateEvent.emit(taskWithDate);
  }
}
