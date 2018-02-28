import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class UsersShow extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get('/api/users/5a96bf1a8eb54a7fe2d88ced') // NEED TO CHANGE TO MAKE DYNAMIC
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <img src={ this.state.user.image }/>
        <h1>{ this.state.user.username }</h1>
        <div>
          { this.state.user.transactions &&
        this.state.user.transactions.map((transaction, i) =>
          <div key={i}>
            <Link to = {`../transactions/${ transaction.id }`}>
              <div className="columns">
                <div className="column">
                  <p>{ transaction.category }</p>
                </div>
                <div className="column">
                  <p>{ transaction.counterParty.name }</p>
                </div>
                <div className="column">
                  <p>{ transaction.date }</p>
                </div>
                <div className="column">
                  <p>{ transaction.amount }</p>
                </div>
                <div className="column">
                  <p>{ transaction.taxRelevant ? 'TaxTrue' : 'TaxFalse' }</p>
                </div>
              </div>
            </Link>
          </div>
        )}
        </div>
      </div>
    );
  }
}


export default UsersShow;
