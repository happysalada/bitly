import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/' exact component={HomePage} />
      </React.Fragment>
    );
  }
}

export default MainApp;
