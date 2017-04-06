import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './counter/module';
import todoReduce from './todo/Reducer';

export default createStore(
  combineReducers({
    counter,
    todoReduce,
  }),
  applyMiddleware(thunk)
);
