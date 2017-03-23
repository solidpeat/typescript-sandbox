import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionDispatcher } from './module';
import Counter from './Counter';

export default connect(
  (store: any) => ({value: store.counter}),
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)}),
)(Counter);
