import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';



class NavTabs extends Component {

  render() {
    return (
      <div style={{margin: '0 0 10px 0'}}>
      <Tabs
        fullWidth
        centered
        value={this.props.page}
        color='primary'
        onChange={() => {console.log('changed')}}
      >
        <Tab label='Transactions' />
        <Tab label='Wallets' />
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
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavTabs);