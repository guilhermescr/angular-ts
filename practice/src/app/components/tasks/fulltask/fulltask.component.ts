import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task/task';
import tasks from '../tasks.json';

@Component({
  selector: 'app-fulltask',
  templateUrl: './fulltask.component.html',
  styleUrls: ['./fulltask.component.css'],
})
export class FulltaskComponent {
  fullTask?: Task;

  constructor(private route: ActivatedRoute) {
    this.getFullTask();
  }

  getFullTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fullTask = tasks.find((task) => task.id === id);
  }
}
