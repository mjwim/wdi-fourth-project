import React from 'react';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import GoogleHeatMap from '../../components/utility/GoogleHeatMap';

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
        <h1>{ this.state.transaction.amount }</h1>
        <GoogleHeatMap center={this.state}/>
      </div>
    );
  }
}

export default TransactionsShow;
