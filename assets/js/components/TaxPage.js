import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
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
import NavTabs from './NavTabs';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { getAccounts, getTransactions } from '../actions';

class TaxPage extends Component {

  state = {
    update: true
  }

  componentDidMount() {
    if (this.props.accounts && this.state.update) {
      this.props.getTransactions(this.props.accounts);
    } else {
      this.props.getAccounts();
    }
  }

  componentDidUpdate() {
    if (this.props.accounts && !this.props.transactions && this.state.update) {
      this.props.getTransactions(this.props.accounts);
      this.setState({update: false});
    }
  }


  render() {
    const incomes = Object.entries(this.props.incomes).map(currency => {
      return (
        <TableRow key={currency[0]}>
            <TableCell>{currency[0]}</TableCell>
            <TableCell>{currency[1]}</TableCell>
        </TableRow>
      )
    });

    const totalTaxes = {};
    Object.entries(this.props.incomes).forEach(currency => {
      totalTaxes[currency[0]] = currency[1]*0.15;
    });

    const viewTaxes = Object.entries(totalTaxes).map(currency => {
      return (
        <TableRow key={currency[0]}>
            <TableCell>{currency[0]}</TableCell>
            <TableCell>{currency[1]}</TableCell>
        </TableRow>
      )
    });

    return (
      <React.Fragment>
      <AppBar position='static' style={{margin: 0}}>
      <Toolbar disableGutters>
        <span style={{ flex: 1 }}></span>
        <Typography color='secondary' variant='title' style={{ fontSize: '30px' }}>Taxes</Typography>
        <span style={{ flex: 1 }}></span>
      </Toolbar>
    </AppBar>
    <NavTabs />
    <Grid container spacing={16}>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Paper style={{padding: '10px', margin: '10px'}}>
      <Table>
          <TableBody>
          <TableRow>
          <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Profits:</TableCell>
          </TableRow>
            {incomes}
          </TableBody>
          </Table>
      </Paper>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Table>
          <TableBody>
          
          </TableBody>
          </Table>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Paper style={{padding: '10px', margin: '10px'}}>
        <Table>
          <TableBody>
        <TableRow>
          <TableCell style={{fontWeight: 'bold', fontSize: '16px'}}>Taxes Owed:</TableCell>
          </TableRow>
            {viewTaxes}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>

    </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    wallets: state.wallets,
    accounts: state.accounts,
    incomes: state.income
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAccounts: () => dispatch(getAccounts()),
    getTransactions: (accounts) => dispatch(getTransactions(accounts))
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(TaxPage);
