import * as React from 'react';
import { CounterState, ActionDispatcher } from './module';

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export default (props: Props) => {
  const loading = (props.value.loadingCount === 0) ? null : <p>Loading...</p>;

  return (
    <div>
      {loading}
      <p>score: {props.value.num}</p>
      <button onClick={() => props.actions.increment(3)}>Increment 3</button>
      <button onClick={() => props.actions.decrement(2)}>Decrement 2</button>
      <button onClick={() => props.actions.fetchAmount()}>Async bonus 100</button>
    </div>
  );
};
