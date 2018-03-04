import React from 'react';
import Axios from 'axios';
import GoogleHeatMap from '../../components/utility/GoogleHeatMap';

class TransactionsIndex extends React.Component {
  state = {
    transactions: [],
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
        <GoogleHeatMap center={this.state.latlng}/>
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
