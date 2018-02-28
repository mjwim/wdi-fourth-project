import React from 'react';
import Axios from 'axios';

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
        { this.state.transactions &&
        this.state.transactions.map((transaction, i) =>
          <div key={i}>
            <p>{ transaction.amount }</p>
            <p>{ transaction.date }</p>
            <p>{ transaction.counterParty.address.lat }</p>
            <p>{ transaction.counterParty.address.lng }</p>
            <p>{ transaction.category }</p>
            <p>{ transaction.taxRelevant }</p>
          </div>
        )}
      </div>
    );
  }
}

export default TransactionsIndex;
