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
import { Typography } from 'material-ui';

class TransactionsPage extends Component {
  render() {
    return (
      <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Button onClick={() => {console.log(this.props.currentState)}}>GET STATE</Button>
          <span style={{flex: 1}}></span>
          <Typography variant='title'>Transactions</Typography>
          <span style={{flex: 1}}></span>
        </Toolbar>
      </AppBar>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{padding: '0 20px'}}>
            <input  style={{width: '100%', boxSizing: 'border-box'}}></input>
          </TableCell>
        </TableRow>
      </TableHead>
      </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentState: state
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
