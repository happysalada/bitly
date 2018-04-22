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

class TaxPage extends Component {
  render() {
    return (
      <React.Fragment>
      <AppBar position='static' style={{margin: 0}}>
      <Toolbar disableGutters>
        <span style={{ flex: 1 }}></span>
        <Typography color='secondary' variant='title' style={{ fontSize: '30px' }}>Taxes</Typography>
        <span style={{ flex: 1 }}></span>
      </Toolbar>
    </AppBar>
    </React.Fragment>
    );
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
)(TaxPage);
