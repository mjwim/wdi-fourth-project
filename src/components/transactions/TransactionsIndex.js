/* global google */

import React from 'react';
import Axios from 'axios';
import GoogleHeatMap from '../../components/utility/GoogleHeatMap';

class TransactionsIndex extends React.Component {
  state = {
    heatMapData: [],
    transactions: []
  }

  componentDidMount() {
    Axios
      .get('/api/transactions')
      .then(res => {
        this.setState({ transactions: res.data, heatMapData: [
          {location: new google.maps.LatLng(51.5111163, -0.1251733), weight: 100},
          {location: new google.maps.LatLng(51.5152149,
            -0.0823318), weight: 950},
          {location: new google.maps.LatLng(51.5111163,
            -0.9723318), weight: 1000},
          {location: new google.maps.LatLng(51.5111363, -0.1051733), weight: 100},
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
        ] });
        console.log(res.data);
        console.log(this.state.heatMapData);
      })
      .catch(err => console.log(err));
  }

  // for each transaction in res.data add an object to state.heatMapData with properties,
  // location: new google.maps.LatLng(res.data[0]counterParty.address.lat, res.data[0]counterParty.address.lng), weight: res.data[0]amount}

  // heatMapData: {location: new google.maps.LatLng(res.data[0]counterParty.address.lat, res.data[0]counterParty.address.lng), weight: res.data[0]amount} //

  render() {
    return (
      <div className="heat-map">
        { this.state.heatMapData[0] &&
        <GoogleHeatMap heatMapData={this.state.heatMapData}/> }
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
