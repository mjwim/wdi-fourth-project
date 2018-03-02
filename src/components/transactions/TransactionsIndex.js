import React from 'react';
import Axios from 'axios';
import GoogleHeatMap from '../../components/utility/GoogleHeatMap';

class TransactionsIndex extends React.Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    Axios
      .get('/api/transactions')
      .then(res => this.setState({ transactions: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <GoogleHeatMap center={this.state}/>
        { this.state.transactions &&
        this.state.transactions.map((transaction, i) =>
          <div key={i}>
            <p>{ transaction.counterParty.address.lat }</p>
            <p>{ transaction.counterParty.address.lng }</p>
          </div>
        )}
      </div>
    );
  }
}

export default TransactionsIndex;
