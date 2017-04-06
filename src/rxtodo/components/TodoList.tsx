import * as React from 'react';
import { Todo, TodoState } from '../stores'
import TodoActions from '../actions';
import TodoItem from './TodoItem';

interface Props {
  state: TodoState;
  actions: TodoActions;
}

export default (props: Props) => {
  // This section should be hidden by default
  // and shown when there are todos.
  if (props.state.length === 0) {
    return null;
  }

  const todos: JSX.Element[] = [];
  const actions = props.actions;
  let areAllCompleted = true;

  props.state.forEach((todo, index) => {
    if (!todo.isCompleted()) {
      areAllCompleted = false;
    }
    todos.push(<TodoItem {...{index, todo, actions}} key={index} />);
  });

  return (
    <section id="main">
      <input
        id="toggle-all"
        type="checkbox"
        onChange={() => props.actions.toggleCompleteAll()}
        checked={areAllCompleted}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul id="todo-list">{todos}</ul>
    </section>
  );
}
