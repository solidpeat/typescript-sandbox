import * as React from 'react';
import { CounterState, ActionDispatcher } from './module';

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export default (props: Props) => (
  <div>
    <p>score: {props.value.num}</p>
    <button onClick={() => props.actions.increment(3)}>Increment 3</button>
    <button onClick={() => props.actions.decrement(2)}>Decrement 2</button>
  </div>
);
