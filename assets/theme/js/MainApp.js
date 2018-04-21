import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import TransactionsPage from './components/TransactionsPage';
import WalletPage from './components/WalletPage';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/' exact component={HomePage} />
        <Route path='/transactions' exact component={TransactionsPage} />
      </React.Fragment>
    );
  }
}

export default MainApp;
