import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './routes/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
