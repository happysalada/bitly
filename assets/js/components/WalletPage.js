import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


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
