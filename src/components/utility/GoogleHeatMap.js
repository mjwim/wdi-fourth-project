/* global google */

import React from 'react';
import mapStyles from '../../components/config/mapStyles';

class GoogleHeatMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas,  {
      center: this.props.center,
      zoom: 12.5,
      style: mapStyles
      // mapTypeId: 'satellite'
    });

    const heatmapData = [
      {location: new google.maps.LatLng(51.5111163, -0.1251733), weight: 100},
      {location: new google.maps.LatLng(51.5152149,
        -0.0823318), weight: 950},
      {location: new google.maps.LatLng(51.5111163,
        -0.9723318), weight: 1000},
      new google.maps.LatLng(51.5111363, -0.1051733),
      {location: new google.maps.LatLng(51.5152149,
        -0.0723318), weight: 500},
      {location: new google.maps.LatLng(51.5131163,
        -0.0623318), weight: 50},
      {location: new google.maps.LatLng(51.5131163, -0.1151733), weight: 90},
      {location: new google.maps.LatLng(51.5122149,
        -0.0753318), weight: 4500},
      {location: new google.maps.LatLng(51.5111163,
        -0.1023318), weight: 800},
      {location: new google.maps.LatLng(51.5191163, -0.1101733), weight: 25},
      {location: new google.maps.LatLng(51.5182149,
        -0.1123318), weight: 192},
      {location: new google.maps.LatLng(51.5171163,
        -0.0523318), weight: 884},
      {location: new google.maps.LatLng(51.5141163, -0.1281733), weight: 84},
      {location: new google.maps.LatLng(51.5152149,
        -0.0623318), weight: 909},
      {location: new google.maps.LatLng(51.5111163,
        -0.0723318), weight: 3.5}
    ];

    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData
    });
    heatmap.setMap(this.map);
  }


  componentWillUnmount() {
    this.map = null;
  }

  render() {
    return (
      <div>
        <div id="floating-panel" className="google-map" ref={element => this.mapCanvas = element }></div>
        {/* <button onClick={this.toggleHeatmap()}>Toggle Heatmap</button>
        <button onClick={this.changeGradient()}>Change gradient</button>
        <button onClick={this.changeRadius()}>Change radius</button>
        <button onClick={this.changeOpacity()}>Change opacity</button> */}
        <div id="map"></div>
      </div>

    );
  }
}

export default GoogleHeatMap;
