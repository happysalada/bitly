import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';


class WalletPage extends Component {

  render() {
    return (
      <h1>WALLET PAGE</h1>
    )
  }
    
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(WalletPage);
