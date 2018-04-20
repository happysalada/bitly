import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';

class AddItem extends Component {

  lwhStyle = {
    width: '33.3333%',
    all: {
      marginTop: '20px'
    }
  }

  textBoxStyles = {
    border: '2px solid #d8d8d8',
    borderRadius: '4px',
    height: '45px',
    padding: '8px',
    boxSizing: 'border-box'
}

  state = {
    name: '',
    category: '',
    weight: '',
    l: '',
    w: '',
    h: '',
    intro: ''
  }

  onAddItem() {
    fetch('https://junction-tokyo.minikura.com/v1/minikura/item?oem_key=a58f6f263c8b5e6b&storage_status=non_storage&common01=' +
    this.state.name + '&common02=' + this.state.weight +
    '&common03=' + this.state.l + '&common04=' + this.state.w + '&common05=' + this.state.h, {method: 'POST'})
        .then((response) => response.json()).then((results) => {
                                                    if (results.status === '1') {
                                                        this.props.stored();
                                                        this.props.history.goBack();

                                                    }}).catch((error) => {console.log(error)})
  }

  render() {
    return <React.Fragment>
      <AppBar color='primary' position='static'>
        <Toolbar>
          <span style={{ flex: 1 }}><Button color="secondary" onClick={() => {
            this.props.history.goBack();
          }}>Back</Button></span><Typography style={{ textAlign: 'center' }} variant="title" color="secondary">Add an Item</Typography><span style={{ flex: 1 }}></span>
        </Toolbar>
      </AppBar>
        <form onSubmit={event => {
          event.preventDefault();
          this.onAddItem();
        }}>
          <div style={{textAlign: 'center', width: '30%', margin: '25px auto', border: '2px solid #afafaf', borderRadius: '8px'}}><Icon style={{padding: '10px'}}>add</Icon><Typography style={{padding: '10px'}}>Add Picture</Typography></div>
          <div style={{width: '92%', margin: 'auto'}}>
            <input
             onChange={event => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Item Name"
            style={{...this.lwhStyle.all, ...this.textBoxStyles, width: '100%'}}/>
            <input onChange={event => {
              this.setState({ category: event.target.value });
            }} placeholder="Catergory" style={{...this.lwhStyle.all, ...this.textBoxStyles, width: '100%'}} />
            <input onChange={event => {
              this.setState({ weight: event.target.value });
            }} placeholder="Weight" style={{...this.lwhStyle.all, ...this.textBoxStyles, width: '100%'}} />
             <input style={{...this.lwhStyle, ...this.lwhStyle.all, ...this.textBoxStyles}}  onChange={event => {
              this.setState({ l: event.target.value });
            }} placeholder="Length" />
             <input  onChange={event => {
              this.setState({ w: event.target.value });
            }} placeholder="Height" style={{...this.lwhStyle, ...this.lwhStyle.all,  ...this.textBoxStyles}} />
            <input  onChange={event => {
              this.setState({ h: event.target.value });
            }} placeholder="Width" style={{...this.lwhStyle, ...this.lwhStyle.all,  ...this.textBoxStyles}} />
            <textarea rows='7' onChange={event => {
              this.setState({ intro: event.target.value });
            }} placeholder="Description" style={{...this.lwhStyle.all, ...this.textBoxStyles, width: '100%', height: '30%'}} ></textarea>

          <Button fullWidth style={{ margin: '10px 0' }} color="primary" type="submit" variant="raised">
            Add Item
            </Button>
            </div>
        </form>
    </React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      stored: () => dispatch({type: 'CLOSE_SNACK'})
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(AddItem);
