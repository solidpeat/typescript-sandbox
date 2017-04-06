import * as React from 'react';
import { Todo } from '../stores'
import TodoActions from '../actions';
import TodoTextInput from './TodoTextInput';

interface Props {
  index: number;
  todo: Todo;
  actions: TodoActions;
}

interface State {
  isEditing: boolean;
}

export default class TodoItem extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = { isEditing: false };
  // }
  state: State = { isEditing: false };

  render() {
    const todo = this.props.todo;
    let input: JSX.Element;

    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={(text: string) => {
            this.onSave(text);
          }}
          value={todo.getText()}
        />;
    }

    return (
      <li
        className={
          todo.isCompleted() ?
          'completed' :
          (this.state.isEditing ? 'editing' : null)
        }
        key={this.props.index}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.isCompleted()}
            onChange={() => {
              this.onToggleComplete();
            }}
          />
          <label onDoubleClick={() => {
            this.onDoubleClick();
          }}>
            {todo.getText()}
          </label>
          <button
            className="destroy"
            onClick={() => {
              this.onDestroyClick();
            }}
            children="destroy"
          />
        </div>
        {input}
      </li>
    );
  }

  private onToggleComplete(): void {
    this.props.actions.toggleComplete(this.props.index, this.props.todo);
  }

  private onDoubleClick(): void {
    this.setState({ isEditing: true });
  }

  private onSave(text: string): void {
    this.props.actions.updateText(this.props.index, text);
    this.setState({ isEditing: false });
  }

  private onDestroyClick(): void {
    this.props.actions.destroy(this.props.index);
  }
}
