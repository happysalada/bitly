import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class Landing extends Component {
  textStyles = {
    padding: '8px'
  };

  textBoxStyles = {
    border: '2px solid #d8d8d8',
    borderRadius: '4px',
    height: '45px',
    padding: '8px',
    boxSizing: 'border-box'
  };

  state = {
    username: '',
    password: ''
  };

  submitForm() {
    this.props.history.push('profile');
    console.log('nav to profile');
  }

  render() {
    return (
      <React.Fragment>
        <div style={{textAlign: 'center', padding: '20px'}}>
          <img
            alt="placeholder"
            style={{width: '50%', margin: 'auto'}}
            src={'/images/logo.png'}
          />
        </div>
        <form
          style={{marginTop: '30px'}}
          onSubmit={event => {
            event.preventDefault();
            this.submitForm();
          }}
        >
          <div style={this.textStyles}>
            <input
              style={{...this.textBoxStyles, width: '100%'}}
              placeholder="Username"
              onChange={event => {
                this.setState({username: event.target.value});
              }}
            />
          </div>
          <div style={this.textStyles}>
            <input
              type="password"
              style={{...this.textBoxStyles, width: '100%'}}
              onChange={event => {
                this.setState({password: event.target.value});
              }}
            />
          </div>
          <Button
            fullWidth
            style={{margin: '15px 0'}}
            color="primary"
            type="submit"
            variant="raised"
          >
            Login
          </Button>
          <Typography style={{textAlign: 'center', margin: '15px'}}>
            or
          </Typography>
          <Button
            fullWidth
            style={{backgroundColor: '#3b5998', margin: '8px 0'}}
            color="primary"
            variant="raised"
          >
            Login with Facebook
          </Button>
        </form>
        <div style={{position: 'fixed', bottom: '0'}}>
          <img
            alt="placeholder"
            style={{width: '100%'}}
            src={'/images/background.png'}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Landing);
