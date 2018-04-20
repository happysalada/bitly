import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';
import {withProps} from 'recompose';

class StorageMap extends Component {
  state = {
    currentOwner: null,
    ownerSelected: false
  };

  mapMarkers = [
    {
      icon: '/images/price2.png',
      position: {lat: 35.612818, lng: 139.737664},
      price: '300',
      click: () => {
        this.setState({
          ownerSelected: true,
          currentOwner: {
            pic: '/images/place1.png',
            price: '300',
            name: 'Tennozu Wine Cellar',
            perfectFor: 'Perfect for Wine'
          }
        });
      }
    },
    {
      icon: '/images/price3.png',
      position: {lat: 35.609194, lng: 139.72702},
      price: '200',
      click: () => {
        this.setState({
          ownerSelected: true,
          currentOwner: {
            pic: '/images/place2.png',
            price: '200',
            name: 'Shinagawa Japanese Kimono Center',
            perfectFor: 'perfect for Kimono'
          }
        });
      }
    },
    {
      icon: '/images/price1.png',
      position: {lat: 35.614545, lng: 139.732086},
      price: '275',
      click: () => {
        this.setState({
          ownerSelected: true,
          currentOwner: {
            pic: '/images/place3.png',
            price: '270',
            name: 'Tokyo secret storage',
            perfectFor: 'perfect for political party documents'
          }
        });
      }
    }
  ];

  updateItem() {
    fetch('/api/minikura/update', {
      body: JSON.stringify({
        item_id: this.props.currentItem.item_id,
        storage_status: 'leaving'
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(results => {
        if (results.status === '1') {
          this.props.history.goBack();
          this.props.inTransit();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const markers = this.mapMarkers.map((marker, index) => {
      return (
        <Marker
          key={index}
          icon={marker.icon}
          position={marker.position}
          onClick={marker.click}
        />
      );
    });
    return (
      <React.Fragment>
        <AppBar color="primary" position="absolute">
          <Toolbar>
            <span style={{flex: 1}}>
              <Button
                color="secondary"
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                Back
              </Button>
            </span>
            <Typography
              style={{textAlign: 'center'}}
              variant="title"
              color="secondary"
            >
              Find Storage
            </Typography>
            <span style={{flex: 1}} />
          </Toolbar>
        </AppBar>
        <div>
          <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: 35.614545, lng: 139.732086}}
          >
            {markers}
          </GoogleMap>
        </div>
        {this.state.currentOwner ? (
          <div>
            <span>
              <img
                alt="placeholder"
                style={{height: '100%', width: '35%'}}
                src={this.state.currentOwner.pic}
              />
            </span>
            <Typography
              variant="title"
              style={{
                display: 'inline-block',
                position: 'absolute',
                bottom: '20%',
                left: '38%'
              }}
            >
              {this.state.currentOwner.name}
            </Typography>
            <Typography
              variant="subheading"
              style={{
                display: 'inline-block',
                position: 'absolute',
                bottom: '11%',
                left: '38%'
              }}
            >
              {this.state.currentOwner.perfectFor}
            </Typography>
            <Typography
              variant="subheading"
              style={{
                display: 'inline-block',
                position: 'absolute',
                bottom: '15%',
                left: '38%'
              }}
            >
              &yen;{this.state.currentOwner.price} / month
            </Typography>
          </div>
        ) : (
          <Typography
            style={{textAlign: 'center', marginTop: '25px'}}
            variant="title"
          >
            Choose a place to store your things!
          </Typography>
        )}
        <Button
          fullWidth
          disabled={!this.state.ownerSelected}
          style={{
            height: '50px',
            backgroundColor: '#ff5656',
            position: 'absolute',
            bottom: '0',
            left: '0'
          }}
          onClick={() => {
            this.updateItem();
          }}
        >
          Store Here
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentItem: state.viewingItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stored: () => dispatch({type: 'CLOSE_SNACK'}),
    inTransit: () => dispatch({type: 'REQUEST_ACCEPT'})
  };
};

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmsFKK1Kzq6BSkI7ailUa23HCidqESrl0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `430px`, marginTop: '58px'}} />,
    mapElement: <div style={{height: `100%`}} />
  }),
  withRouter,
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps, mapDispatchToProps)
)(StorageMap);
