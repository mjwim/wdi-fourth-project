/* global google */

import React from 'react';
import mapStyles from '../../components/config/mapStyles';

class GoogleHeatMap extends React.Component {

  // state = {
  //   map: {}
  // }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center.center || { lat: 51.51, lng: -0.09 },
      zoom: 14,
      style: mapStyles
    });

    // const heatmap = new google.maps.visualization.HeatmapLayer({
    //   data: getPoints(),
    //   map: this.map
    // });
    // ;
  }

  // toggleHeatmap() {
  //   heatmap.setMap(heatmap.getMap() ? null : map);
  // }

  // changeGradient() {
  //   var gradient = [
  //     'rgba(0, 255, 255, 0)',
  //     'rgba(0, 255, 255, 1)',
  //     'rgba(0, 191, 255, 1)',
  //     'rgba(0, 127, 255, 1)',
  //     'rgba(0, 63, 255, 1)',
  //     'rgba(0, 0, 255, 1)',
  //     'rgba(0, 0, 223, 1)',
  //     'rgba(0, 0, 191, 1)',
  //     'rgba(0, 0, 159, 1)',
  //     'rgba(0, 0, 127, 1)',
  //     'rgba(63, 0, 91, 1)',
  //     'rgba(127, 0, 63, 1)',
  //     'rgba(191, 0, 31, 1)',
  //     'rgba(255, 0, 0, 1)'
  //   ]
  //   heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
  // }
  //
  // changeRadius() {
  //   heatmap.set('radius', heatmap.get('radius') ? null : 20);
  // }
  //
  // changeOpacity() {
  //   heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
  // }
  //
  //   const heatmapData = [
  //   new google.maps.LatLng(37.782, -122.447),
  //   new google.maps.LatLng(37.782, -122.445),
  //   new google.maps.LatLng(37.782, -122.443),
  //   new google.maps.LatLng(37.782, -122.441),
  //   new google.maps.LatLng(37.782, -122.439),
  //   new google.maps.LatLng(37.782, -122.437),
  //   new google.maps.LatLng(37.782, -122.435),
  //   new google.maps.LatLng(37.785, -122.447),
  //   new google.maps.LatLng(37.785, -122.445),
  //   new google.maps.LatLng(37.785, -122.443),
  //   new google.maps.LatLng(37.785, -122.441),
  //   new google.maps.LatLng(37.785, -122.439),
  //   new google.maps.LatLng(37.785, -122.437),
  //   new google.maps.LatLng(37.785, -122.435)
  // ];
  //
  // console.log(this.state);
  // console.log(heatmap);
  //
  // var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);
  //
  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: sanFrancisco,
  //   zoom: 13,
  //   mapTypeId: 'satellite'
  // });
  //
  // var heatmap = new google.maps.visualization.HeatmapLayer({
  //   data: heatmapData
  // });
  // heatmap.setMap(map);

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
