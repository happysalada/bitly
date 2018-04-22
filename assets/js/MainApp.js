import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import TransactionsPage from './components/TransactionsPage';
import WalletPage from './components/WalletPage';
import WidgetPage from './components/WidgetPage';
import TaxPage from './components/TaxPage';
import {withRouter} from 'react-router-dom';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/app/' exact component={HomePage} />
        <Route path='/app/transactions' exact component={TransactionsPage} />
        <Route path='/app/wallets' exact component={WalletPage} />
        <Route path='/app/taxes' exact component={TaxPage} />
      </React.Fragment>
    );
  }
}

export default MainApp;
