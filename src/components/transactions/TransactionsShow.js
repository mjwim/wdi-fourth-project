import React from 'react';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import GoogleMap from '../../components/utility/GoogleMap';

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
            <h1>{ this.state.transaction.amount }</h1>
            <h1>{ this.state.transaction.counterParty.address.lat }</h1>
            <GoogleMap center={this.state.transaction.counterParty.address}/>
          </div>
        }
      </div>
    );
  }
}

export default TransactionsShow;
