import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TransactionsPage from './components/TransactionsPage';
import WalletPage from './components/WalletPage';
import WidgetPage from './components/WidgetPage';

import { withRouter } from 'react-router-dom';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/app/" exact component={HomePage} />
        <Route path="/app/transactions" exact component={TransactionsPage} />
        <Route path="/app/widget" exact component={WidgetPage} />
        <Route path="/app/dashboard" exact component={Dashboard} />
        <Route path="/app/profile" component={UserProfile} />
        <Route path="/app/forms" component={Forms} />
        <Route path="/app/tables" component={Tables} />
        <Route path="/app/maps" component={MapsPage} />
        <Route path="/app/charts" component={Charts} />
        <Route path="/app/calendar" component={Calendar} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainApp;
