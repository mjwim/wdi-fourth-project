/* global google */

import React from 'react';
import mapStyles from '../../components/config/mapStyles';

class GoogleMap extends React.Component {

  componentDidMount() {
    console.log(this.props.center);
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09 },
      zoom: 14,
      style: mapStyles
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.center || { lat: 51.51, lng: -0.09 },
      animation: google.maps.Animation.DROP
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element }> Google Map goes here...</div>
    );
  }
}

export default GoogleMap;
