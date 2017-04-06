import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import TodoStore, { Todo, TodoState } from '../stores';
import TodoActions from '../actions';
import { TodoReducersFactory } from '../reducers';
import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';

interface Props extends RouteComponentProps<void> {}

interface State {
  state: TodoState
}

export default class RxTodoApp extends React.Component<Props, State> {
  private actions: TodoActions;

  constructor (props: Props) {
    super(props);
    this.actions = new TodoActions(TodoReducersFactory.create());
    const store = new TodoStore(this.actions.observable, []);
    store.observable.subscribe(
      (state) => this.state ? this.setState({state}) : this.state = {state}
    );
  }

  render() {
    return (
      <div>
        <Header actions={this.actions} />
        <TodoList state={this.state.state} actions={this.actions} />
        <Footer state={this.state.state} actions={this.actions} />
      </div>
    );
  }
}
