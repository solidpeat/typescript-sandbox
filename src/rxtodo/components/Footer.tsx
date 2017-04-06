import * as React from 'react';
import { Todo, TodoState } from '../stores';
import TodoActions from '../actions';

interface Props {
  state: TodoState;
  actions: TodoActions;
}

export default (props: Props) => {
  const total = props.state.length;
  const completed = props.state.filter((todo) => todo.isCompleted()).length;
  const itemsLeft = total - completed;
  let clearCompletedButton: JSX.Element;

  if (total === 0) {
    return null;
  }

  if (completed > 0) {
    clearCompletedButton =
      <button
        id="clear-completed"
        onClick={() => props.actions.destroyCompleted()}
      >
        Clear completed ({completed})
      </button>;
  }

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>{itemsLeft}</strong> item(s) left
      </span>
      {clearCompletedButton}
    </footer>
  );
}
