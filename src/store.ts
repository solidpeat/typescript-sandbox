import { createStore, combineReducers } from 'redux';
import counter from './counter/module';

export default createStore(
  combineReducers({
    counter
  })
);
