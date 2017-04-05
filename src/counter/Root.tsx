import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from './actions';
import Counter from './Counter';

export default connect(
  (store: any) => ({value: store.counter}),
  (dispatch: Dispatch<any>) => ({actions: bindActionCreators(CounterActions as any, dispatch)}),
)(Counter);
