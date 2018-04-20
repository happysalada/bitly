import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Profile from './components/profile';
import LandingSlide from './components/landing-slide';
import StorageMap from './components/storagemap';
import ItemStatus from './components/itemstatus';
import AddItem from './components/additem';

class MainApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={LandingSlide} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/find-storage" exact component={StorageMap} />
        <Route path="/view-item" exact component={ItemStatus} />
        <Route path="/add-item" exact component={AddItem} />
      </React.Fragment>
    );
  }
}

export default MainApp;
