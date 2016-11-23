'use strict'

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <ul className="inline">
        <li><a href="/">Index</a></li>
        <li><a href="/design">Designer</a></li>
      <li><a href="/explore">Explorer</a></li>
      <li><a href="/facilitation">Facilitator</a></li>
      </ul>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('navigation')
);
