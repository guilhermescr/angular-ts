import { createAction } from '@ngrx/store';

export const actions = {
  increment: createAction('[Counter Ngrx Component] Increment'),
  decrement: createAction('[Counter Ngrx Component] Decrement'),
  reset: createAction('[Counter Ngrx Component] Reset'),
};

