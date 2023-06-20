import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-children',
  templateUrl: './testing-children.component.html',
  styleUrls: ['./testing-children.component.scss'],
})
export class TestingChildrenComponent {
  parentsName: string = 'Dad';
}
