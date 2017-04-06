import * as React from 'react';
import TodoActions from '../actions';
import TodoTextInput from './TodoTextInput';

interface Props {
  actions: TodoActions;
}

export default class Header extends React.Component<Props, void> {
  private onSave(text: string): void {
    if (text.trim()){
      this.props.actions.create(text);
    }
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={(text: string) => {
            this.onSave(text);
          }}
        />
      </header>
    );
  }
}
