import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Main from './pages/main'

import './less/app.less'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="*" component={Main}/>
      </Router>
    );
  }
}

export default App;
