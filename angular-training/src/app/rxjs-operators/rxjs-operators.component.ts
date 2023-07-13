import { Component } from '@angular/core';
import { Observable, filter, from, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent {
  ages: number[] = [10, 23, 30, 47, 59, 12];
  agesObservable = from(this.ages);

  constructor() {
    this.agesObservable.subscribe((result) => {
      console.log('Subscribe Array', result);
    });

    this.agesObservable.pipe(map((num) => num * 2)).subscribe((result) => {
      console.log('Map Array', result);
    });

    this.agesObservable.pipe(filter((num) => num % 2 === 1)).subscribe((result) => {
      console.log('Filter Array', result);
    });;
  }
}
