import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {changePage } from '../actions';



class NavTabs extends Component {

  render() {
    return (
      <div style={{margin: '0 0 10px 0'}}>
      <Tabs
        fullWidth
        centered
        value={this.props.page}
        textColor='primary'
        indicatorColor='primary'
        onChange={(event, value) => {this.props.changePage(value)}}
      >
        <Tab label='Home' onClick={() => {this.props.history.push('/home')}} />
        <Tab label='Transactions' onClick={() => {this.props.history.push('/app/transactions')}} />
        <Tab label='Wallets' onClick={() => {this.props.history.push('/app/wallets')}} />
      </Tabs>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentState: state,
    page: state.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: (value) => dispatch(changePage(value))
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavTabs);