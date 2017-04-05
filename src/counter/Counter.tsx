import * as React from 'react';
import { CounterState } from './module';
import * as CounterActions from './actions';

interface Props {
  value: CounterState;
  actions: typeof CounterActions;
}

export default (props: Props) => {
  const loading = (props.value.loadingCount === 0) ? null : <p>Loading...</p>;

  return (
    <div>
      {loading}
      <p>score: {props.value.num}</p>
      <button onClick={() => props.actions.increment(3)}>Increment 3</button>
      <button onClick={() => props.actions.decrement(2)}>Decrement 2</button>
    </div>
  );
};
