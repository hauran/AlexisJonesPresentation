import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Main from './pages/main'
import Landing from './pages/landing'

import './less/app.less'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing}/>
        <Route path="/chat" component={Main}/>
        <Route path="*" component={Landing}/>
      </Router>
    );
  }
}

export default App;
