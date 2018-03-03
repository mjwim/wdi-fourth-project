/* global accounting */

import React from 'react';
import Axios from 'axios';
import GoogleMap from '../../components/utility/GoogleMap';
import Moment from 'moment';

accounting.settings.currency.format = {
  pos: '%s %v',   // for positive values, eg. "$ 1.00" (required)
  neg: '%s (%v)', // for negative values, eg. "$ (1.00)" [optional]
  zero: '%s  -- '  // for zero values, eg. "$  --" [optional]
};

class TransactionsShow extends React.Component {
  state = {
    transaction: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/transactions/${this.props.match.params.id}`)
      .then(res => this.setState({ transaction: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        { this.state.transaction.counterParty &&
          <div>
            <h1>{ accounting.formatMoney(this.state.transaction.amount, '£', 2) }</h1>
            <h1>{ this.state.transaction.counterParty.name }</h1>
            <h1>{ Moment(this.state.transaction.date).format('Do MMMM YYYY') }</h1>
            <GoogleMap center={this.state.transaction.counterParty.address}/>
          </div>
        }
      </div>
    );
  }
}

export default TransactionsShow;
