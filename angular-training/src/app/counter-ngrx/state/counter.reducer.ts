import { createReducer, on } from '@ngrx/store';
import { actions } from './counter.actions';

export const counterReducer = createReducer(
  0,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => (state > 0 ? state - 1 : state)),
  on(actions.reset, () => 0)
);
