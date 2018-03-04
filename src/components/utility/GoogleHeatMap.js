/* global google */

import React from 'react';
import mapStyles from '../../components/config/mapStyles';

class GoogleHeatMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas,  {
      center: new google.maps.LatLng(51.5081, -0.1248),
      zoom: 12.5,
      style: mapStyles
      // mapTypeId: 'satellite'
    });

    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.props.heatMapData
    });
    heatmap.setMap(this.map);
  }

  componentWillUnmount() {
    this.map = null;
    console.log(this.props.heatMapData);
  }

  render() {
    return (
      <div>
        <div id="floating-panel" className="google-map" ref={element => this.mapCanvas = element }></div>
        <div id="map"></div>
      </div>

    );
  }
}

export default GoogleHeatMap;
