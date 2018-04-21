import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import TransactionsPage from './components/TransactionsPage';
import WalletPage from './components/WalletPage';
import WidgetPage from './components/WidgetPage';
import Dashboard from './components/Dashboard';
//import Charts from './components/Charts';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/' exact component={HomePage} />
        <Route path="/dash" exact component={Dashboard} />
        <Route path='/transactions' exact component={TransactionsPage} />
        <Route path='/widget' exact component={WidgetPage} />
        //<Route path="/" exact component={Charts} />

      </React.Fragment>
    );
  }
}

export default MainApp;
