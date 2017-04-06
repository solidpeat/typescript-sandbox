import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { DispatchActions } from './Models';
import TodoList, { Props as TodoProps } from './TodoList';

interface Props extends TodoProps, RouteComponentProps<void> {}

@connect(
  (state: any) => ({ state: state.todoReduce }),
  (dispatch: Dispatch<any>) => ({ actions: new DispatchActions(dispatch) }),
)
export default class TodoRoot extends React.Component<Props, void> {
  render() {
    return <TodoList {...this.props} />;
  }
}
