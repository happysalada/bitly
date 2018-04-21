import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Moment from 'react-moment';
import { getAccounts } from '../actions';


class WalletPage extends Component {

  styles = {
    currencyImg: {
      height: '45px',
      width: '45px',
      margin: '20px'
    },
    typeImg: {
    }
  }

  componentDidMount() {
    if (this.props.wallets) {
      console.log('your good');
    } else {
      this.props.getAccounts();
    }
  }

  getCurrencyImg(currency, type) {
    switch (currency) {
      case 'USD':
        return '/images/dollar.png';
      case 'BTC':
        return type === 'vault' ? 'https://placehold.it/120x120' : '/images/bitcoin.png';
      case 'LTC':
        return '/images/litecoin.svg';
      case 'ETH':
        return '/images/ether.png';
    }
  }

  render() {
    const currentWallets = this.props.wallets ? this.props.wallets.data.map((wallet) => {
      return (
        <TableRow key={wallet.id}>
          <TableCell style={{ textAlign: 'center' }}>
            <img style={this.styles.currencyImg} src={this.getCurrencyImg(wallet.currency, wallet.type)} alt='currency img' />
          </TableCell>
          <TableCell>
              <Typography>{`${wallet.balance.amount} ${wallet.balance.currency}`}</Typography>
          </TableCell>
        </TableRow>
      )
    }) : <TableRow><TableCell><Typography component='span'>No Wallets</Typography></TableCell></TableRow>;


    return (
      <React.Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Button onClick={() => { console.log(this.props.currentState) }}>GET STATE</Button>
            <span style={{ flex: 1 }}></span>
            <Typography variant='title' style={{ fontSize: '30px' }}>Wallets</Typography>
            <span style={{ flex: 1 }}></span>
          </Toolbar>
        </AppBar>
        <Paper style={{ width: '90%', margin: 'auto' }}>
          <Table>
            <TableBody>
              {currentWallets}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    )
  }
}




const mapStateToProps = state => {
  return {
    currentState: state,
    wallets: state.wallets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAccounts: () => dispatch(getAccounts())
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(WalletPage);
