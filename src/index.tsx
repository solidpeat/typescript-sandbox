import * as React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './Root';
import NotFound from './NotFound';
import Counter from './counter/Root';

// Routerの直下は単一じゃないとダメ
render(
  <Provider store={store}>
    <Router>
      <div>
        <h1>React Redux sample</h1>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/random_url'>Notfound</Link></li>
        <hr/>
        <Switch>
          <Route exact path='/' component={Root} />
          <Route path='/counter' component={Counter} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
