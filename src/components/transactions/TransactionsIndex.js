/* global google */

import React from 'react';
import Axios from 'axios';
import GoogleHeatMap from '../../components/utility/GoogleHeatMap';

class TransactionsIndex extends React.Component {
  state = {
    heatMapData: [
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
    ],
    latlng: new google.maps.LatLng(51.5081, -0.1248)
  }

  componentDidMount() {
    Axios
      .get('/api/transactions')
      .then(res => this.setState({ transactions: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="heat-map">
        <GoogleHeatMap heatMapData={this.state.heatMapData}/>
        { this.state.transactions &&
        this.state.transactions.map((transaction, i) =>
          <div key={i}>
            <p>{ Math.abs(transaction.amount) }</p>
            <p>{ transaction.counterParty.address.lat }</p>
            <p>{ transaction.counterParty.address.lng }</p>
          </div>
        )}
      </div>
    );
  }
}

export default TransactionsIndex;
