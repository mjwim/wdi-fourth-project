/* global accounting */

import React from 'react';
import Axios from 'axios';
import GoogleMap from '../../components/utility/GoogleMap';
import Moment from 'moment';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

accounting.settings.currency.format = {
  pos: '%s %v',
  neg: '%s (%v)',
  zero: '%s  -- '
};

class TransactionsShow extends React.Component {
  state = {
    transaction: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/transactions/${this.props.match.params.id}`, { headers: { authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({ transaction: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <BackButton history={this.props.history} />
        { this.state.transaction.belongsTo === Auth.getPayload().userId ?
          (<div>

            { this.state.transaction.counterParty &&
            <div>
              <h1>{ accounting.formatMoney(this.state.transaction.amount, '£', 2) }</h1>
              <h1>{ this.state.transaction.counterParty.name }</h1>
              <h1>{ Moment(this.state.transaction.date).format('Do MMMM YYYY') }</h1>
              <GoogleMap center={this.state.transaction.counterParty.address}/>
            </div>
            }
          </div>
          )
          :
          (
            <div>
              <p>You are not permitted to view this page</p>
            </div>) }
      </div>

    );
  }
}

export default TransactionsShow;
