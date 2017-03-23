import * as React from 'react';
import { render } from 'react-dom';
import Hello from "./components/Hello";

render(
  <Hello content="hello world"/>,
  document.getElementById('app'),
);
