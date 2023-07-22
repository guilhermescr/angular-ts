import { Component } from '@angular/core';
import { ActionReducer, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actions } from './state/counter.actions';

interface StoreProps {
  books: ActionReducer<any>;
  collection: ActionReducer<any>;
  counter: number;
}

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrls: ['./counter-ngrx.component.scss'],
})
export class CounterNgrxComponent {
  count$: Observable<number>;

  constructor(private store: Store<StoreProps>) {
    this.count$ = this.store.select('counter');
  }

  increment(): void {
    this.store.dispatch(actions.increment());
  }

  decrement(): void {
    this.store.dispatch(actions.decrement());
  }

  reset(): void {
    this.store.dispatch(actions.reset());
  }
}
