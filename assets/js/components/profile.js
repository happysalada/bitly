import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Notifi from './notification';
import {connectToChannel} from '../actions';
import {updateItems} from '../actions';
import Icon from 'material-ui/Icon';

class Profile extends Component {
  state = {
    deleted: true
  }

  vertical = 'bottom';
  horizontal = 'right';

  componentDidMount() {
    const {dispatch} = this.props;
    this.props.connectToChannel();
    this.props.getItems();
  }

  componentDidUpdate() {
    if (this.state.deleted) {
      this.props.getItems();
      this.setState({deleted: false})
    }
  }

  render() {
    let items = null;
    if (this.props.currentItems) {
      items = this.props.currentItems.map(item => {
        let status = 'unknown';
        let route = '';
        let storage = null;
        switch (item.storage_status) {
          case 'non_storage':
            status = 'Store';
            route = '/find-storage';
            storage = (
              <Typography component="span" style={{color: '#b2b2b2'}}>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    border: '5px solid #b2b2b2',
                    borderRadius: '5px'
                  }}
                />
                <span style={{margin: '0 3px'}}>Not Shipped</span>
              </Typography>
            );
            break;
          case 'storage':
            status = 'Check';
            route = '/view-item';
            storage = (
              <Typography component="span" style={{color: '#09b500'}}>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    border: '5px solid #09b500',
                    borderRadius: '5px'
                  }}
                />
                <span style={{margin: '0 3px'}}>Stored</span>
              </Typography>
            );
            break;
          case 'leaving':
            status = 'Check';
            route = '/view-item';
            storage = (
              <Typography component="span" style={{color: '#3f3cfc'}}>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    border: '5px solid #3f3cfc',
                    borderRadius: '5px'
                  }}
                />
                <span style={{margin: '0 3px'}}>In Transit</span>
              </Typography>
            );
            break;
          case 'temporary_leaving':
            status = 'Check';
            route = '/view-item';
            storage = (
              <Typography component="span" style={{color: '#3f3cfc'}}>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    border: '5px solid #3f3cfc',
                    borderRadius: '5px'
                  }}
                />
                <span style={{margin: '0 3px'}}>In Transit</span>
              </Typography>
            );
            break;
          default:
            storage = <span>Unknown</span>;
            status = 'Store';
            route = '/find-storage';
        }
        return (
          <ListItem key={item.item_id}>
            <img
              alt="item"
              src="https://placehold.it/55x55"
              style={{borderRadius: '3px'}}
            />
            <ListItemText primary={item.common01} secondary={storage} />
            <ListItemSecondaryAction>
              <Button
                onClick={() => {
                  this.props.history.push(route);
                  this.props.updateViewing(item, storage);
                }}
                variant="raised"
                style={{marginRight: '3px'}}
                color="primary"
              >
                {status}
              </Button>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  fetch('/api/minikura/delete', {
                    body: JSON.stringify({
                      item_id: item.item_id
                    }),
                    headers: {
                      'content-type': 'application/json'
                    },
                    method: 'POST'
                  })
                    .then(response => response.json())
                    .then(results => {
                      if (results.status === '1') {
                        this.props.stored();
                        this.setState({deleted: true});
                      }
                    })
                    .catch(error => {
                      console.log(error);
                    });
                }}
              >
                <Icon>delete</Icon>
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      });
    }
    return (
      <React.Fragment>
        <AppBar color="primary" position="static">
          <Toolbar>
            <span style={{flex: 1}}>
              <Button
                color="secondary"
                onClick={() => {
                  this.props.history.push('/');
                }}
              >
                Logout
              </Button>
            </span>
            <Typography
              style={{textAlign: 'center'}}
              variant="title"
              color="secondary"
            >
              Profile
            </Typography>
            <span style={{flex: 1}} />
          </Toolbar>
        </AppBar>
        <div style={{textAlign: 'center'}}>
          <img
            alt="profile-pic"
            src="/images/profile.jpg"
            style={{
              borderRadius: '10px',
              marginTop: '15px',
              border: '2px solid #d50000'
            }}
          />
          <Typography
            color="primary"
            style={{margin: '5px', fontWeight: 'bold', fontSize: '16px'}}
          >
            {this.props.username}
          </Typography>
        </div>
        <Snackbar
          color="primary"
          anchorOrigin={{
            vertical: this.vertical,
            horizontal: this.horizontal
          }}
          open={this.props.notificationOpen}
          autoHideDuration={5000}
          onClose={() => {
            this.props.removeNotify();
          }}
          children={
            <Notifi
              title={this.props.notifyTitle}
              message={this.props.notifyMessage}
              close={() => {
                console.log('closed');
              }}
            />
          }
        />
        <List>
          <ListItem
            button
            style={{backgroundColor: '#ffadad'}}
            onClick={() => {
              this.props.history.push('/add-item');
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                color: '#d50000',
                width: '55px',
                border: '2px solid #d50000',
                height: '55px',
                borderRadius: '10px',
                textAlign: 'center',
                lineHeight: '65px'
              }}
            >
              <Icon style={{fontSize: '20px'}}>add</Icon>
            </div>
            <Typography
              style={{
                margin: '0 15px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#d50000'
              }}
            >
              Add an Item
            </Typography>
          </ListItem>
          {items}
        </List>
        <Snackbar
          color="primary"
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          open={this.props.storedOpen}
          autoHideDuration={3000}
          onClose={() => {
            this.props.stored();
          }}
          message={
            <Typography
              style={{textAlign: 'center', color: '#fff', margin: 'auto'}}
            >
              Successful!
            </Typography>
          }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.notifications[0]) {
    return {
      notifyTitle: state.notifications[0].title,
      notifyMessage: state.notifications[0].message,
      notificationOpen: state.notificationOpen,
      currentItems: state.currentItems,
      username: state.username,
      storedOpen: state.storedOpen
    };
  }
  return {
    notifyTitle: '',
    notifyMessage: '',
    notificationOpen: state.notificationOpen,
    currentItems: state.currentItems,
    username: state.username,
    storedOpen: state.storedOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    connectToChannel: () => dispatch(connectToChannel()),
    getItems: () => dispatch(updateItems()),
    removeNotify: () => dispatch({type: 'REMOVE'}),
    updateViewing: (item, storage) =>
      dispatch({type: 'UPDATE_VIEWING', item: {...item, storage}}),
    stored: () => dispatch({type: 'CLOSE_SNACK'})
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
