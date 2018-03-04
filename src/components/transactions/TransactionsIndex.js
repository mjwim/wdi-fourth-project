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
        this.setState({ transactions: res.data, heatMapData: res.data.map((transaction) => {
          return {location: new google.maps.LatLng(transaction.counterParty.address.lat, transaction.counterParty.address.lng)};
          // , weight: transaction.amount/1000 ?????????
        })}
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="heat-map">
        { this.state.heatMapData[0] &&
        <GoogleHeatMap heatMapData={this.state.heatMapData}/> }
      </div>
    );
  }
}

export default TransactionsIndex;
