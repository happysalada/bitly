import React, {Component} from 'react';
import Slider from 'react-slick';
import Landing from './landing';

class LandingSlide extends Component {
  settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false
  };

  render() {
    return (
      <Slider style={{height: '100%'}} {...this.settings}>
        <div>
          <img
            style={{width: '100%', height: '100%'}}
            alt="heloo"
            src={'/images/ds1.png'}
          />
        </div>
        <div>
          <img
            style={{width: '100%', height: '100%'}}
            alt="heloo"
            src={'/images/ds2.png'}
          />
        </div>
        <div>
          <img
            style={{width: '100%', height: '100%'}}
            alt="heloo"
            src={'/images/ds3.png'}
          />
        </div>
        <div>
          <img
            style={{width: '100%', height: '100%'}}
            alt="heloo"
            src={'/images/ds4.png'}
          />
        </div>
        <div>
          <img
            style={{width: '100%', height: '100%'}}
            alt="heloo"
            src={'/images/ds5.png'}
          />
        </div>
        <div>
          <img
            style={{width: '100%', height: '100%'}}
            alt="heloo"
            src={'/images/ds6.png'}
          />
        </div>
        <div style={{height: '100%'}}>
          <Landing />
        </div>
      </Slider>
    );
  }
}

export default LandingSlide;
