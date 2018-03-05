/* global google */

import React from 'react';
import Axios from 'axios';
import GoogleHeatMap from '../../components/utility/GoogleHeatMap';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class TransactionsIndex extends React.Component {
  state = {
    heatMapData: [],
    transactions: []
  }

  componentDidMount() {
    Axios
      .get('/api/transactions', { headers: { authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({ transactions: res.data, heatMapData: res.data.map((transaction) => {
          return {location: new google.maps.LatLng(transaction.counterParty.address.lat, transaction.counterParty.address.lng) };
        })}
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <BackButton history={this.props.history} />
        <div className="heat-map">
          { this.state.heatMapData[0] &&
        <GoogleHeatMap heatMapData={this.state.heatMapData}/> }
        </div>
      </div>
    );
  }
}

export default TransactionsIndex;
