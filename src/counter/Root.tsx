import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionDispatcher } from './module';
import Counter, { Props as CounterProps } from './Counter';

// react-routerのためにRouteComponentPropsを継承
interface Props extends CounterProps, RouteComponentProps<void> {}

// デコレータのためにはclassじゃないとだめ
@connect(
  (state) => ({ value: state.counter }),
  (dispatch) => ({ actions: new ActionDispatcher(dispatch) }),
)
// voidはreact-routerのために必要
export default class CounterRoot extends React.Component<Props, void> {
  render() {
    return <Counter {...this.props} />;
  }
}
