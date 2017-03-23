import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import Counter from "./counter/Root";

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app'),
);
