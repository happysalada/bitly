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

class TransactionsPage extends Component {

  styles = {
    currencyImg: {
      width: '20%',
    },
    typeImg: {
      width: '25%',
      marginLeft: '10px'
    }
  }

  getCurrencyImg(currency) {
    switch (currency) {
      case 'USD':
        return 'https://placehold.it/500x500';
      case 'BTC':
        return 'https://placehold.it/500x500';
      case 'LTC':
        return 'https://placehold.it/500x500';
      case 'ETH':
        return 'https://placehold.it/500x500';
    }
  }

  getPlace(place) {
    switch (place) {
      case 'coinbase':
        return 'Coinbase Exchange'
    }
  }


  render() {
    const currentTransactions = this.props.transactions.map((transaction) => {
      switch (transaction.type) {
        case 'buy':
          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <img style={this.styles.typeImg} src='https://placehold.it/500x500' alt='currency img' />
              </TableCell>
              <TableCell>
                <img style={this.styles.currencyImg} src={this.getCurrencyImg(transaction.amount.currency)} alt='currency img' />
              </TableCell>
              <TableCell>
                <Typography>{this.getPlace(transaction.exchange || 'address')}</Typography>
                <Typography>Ammount</Typography>
              </TableCell>
              <TableCell>
                <Typography>place</Typography>
                <Typography>Ammount</Typography>
              </TableCell>
              <TableCell>
                <Icon>arrow_drop_down_circle</Icon>
              </TableCell>
            </TableRow>
          )
        case 'sell':
          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <img style={this.styles.typeImg} src='https://placehold.it/500x500' alt='currency img' />
              </TableCell>
              <TableCell>
                <img style={this.styles.currencyImg} src={this.getCurrencyImg(transaction.amount.currency)} alt='currency img' />
              </TableCell>
              <TableCell>
                <Typography>{this.getPlace(transaction.exchange || 'address')}</Typography>
                <Typography>Ammount</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          )
        case 'send':
          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <img style={this.styles.typeImg} src='https://placehold.it/500x500' alt='currency img' />
              </TableCell>
              <TableCell>
                <img style={this.styles.currencyImg} src={this.getCurrencyImg(transaction.amount.currency)} alt='currency img' />
              </TableCell>
              <TableCell>
                <Typography>{this.getPlace(transaction.exchange || 'address')}</Typography>
                <Typography>Ammount</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          )
      }
    });


    return (
      <React.Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Button onClick={() => { console.log(this.props.currentState) }}>GET STATE</Button>
            <span style={{ flex: 1 }}></span>
            <Typography variant='title' style={{ fontSize: '30px' }}>Transactions</Typography>
            <span style={{ flex: 1 }}></span>
          </Toolbar>
        </AppBar>
        <Paper style={{ width: '90%', margin: 'auto' }}>
          <Table style={{ minWidth: '700px' }}>
            <TableBody>
              {currentTransactions}
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
    transactions: state.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(TransactionsPage);
