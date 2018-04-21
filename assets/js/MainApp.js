import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import TransactionsPage from './components/TransactionsPage';
import WalletPage from './components/WalletPage';
import WidgetPage from './components/WidgetPage';







import { setMobileNavVisibility } from './crystal/reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './crystal/Header';
import Footer from './crystal/Footer';
import SideBar from './crystal//SideBar';
import ThemeOptions from './crystal/ThemeOptions';
import MobileMenu from './crystal/MobileMenu';
/**
 * Pages
 */
import Dashboard from './crystal/Dashboard';

import UserProfile from './crystal/UserProfile';
import MapsPage from './crystal/MapsPage';
import Forms from './crystal/Forms';
import Charts from './crystal/Charts';
import Calendar from './crystal/Calendar';
import Tables from './crystal/Tables';










class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/app/' exact component={HomePage} />
        <Route path='/app/transactions' exact component={TransactionsPage} />
        <Route path='/app/widget' exact component={WidgetPage} />






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
