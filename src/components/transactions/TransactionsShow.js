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
              <div className="columns form-container">
                <div className="column">
                  <p>{ this.state.transaction.counterParty.name }</p>
                </div>
                <div className="column">
                  <img src={`https://logo.clearbit.com/${ this.state.transaction.counterParty.website }?size=50`} alt={ this.state.transaction.counterParty.name }/>
                </div>
                <div className="column">
                  <p>{ Moment(this.state.transaction.date).format('DD/MM/YYYY') }</p>
                </div>
                <div className="column">
                  <p>{ accounting.formatMoney(this.state.transaction.amount, '£', 2) }</p>
                </div>
              </div>
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
