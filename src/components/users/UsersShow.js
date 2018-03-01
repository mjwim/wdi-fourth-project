import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import _ from 'lodash';

import TaxButton  from '../../components/utility/TaxButton';

class UsersShow extends React.Component {
  state = {
    user: {},
    taxButton: false
  }

  componentDidMount() {
    Axios
      .get('/api/users/5a972b1d0330ad94a9dbbbb6') // NEED TO CHANGE TO MAKE DYNAMIC
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  taxButtonToggle = () => {
    this.setState({ taxButton: !this.state.taxButton });
  }

  transactionTaxToggle = (transaction) => {
    console.log(transaction.id);
    transaction.taxRelevant = !transaction.taxRelevant;
    Axios
      .put(`/api/transactions/${transaction.id}`);
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
            <div className="columns">
              <Link to = {`../transactions/${ transaction.id }`}>
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
              </Link>
              <div className="column">
                {/* <p>{ transaction.taxRelevant ? 'TaxTrue' : 'TaxFalse' }</p> */}
                <button onClick={() => this.transactionTaxToggle(transaction)}>Toggle tax</button>
              </div>
            </div>
          </div>
        )}
          <TaxButton
            taxButtonToggle={ this.taxButtonToggle }/>
          { this.state.user.transactions && !this.state.taxButton &&
            this.state.user.transactions.reduce((aggregateTransactions, transaction) => {
              if(aggregateTransactions.some(aggregate => aggregate.category === transaction.category)) {
                const objectIndex = _.findIndex(aggregateTransactions, (aggTran) => aggTran.category === transaction.category);
                aggregateTransactions[objectIndex].amount += transaction.amount;
                return aggregateTransactions;
              } else {
                aggregateTransactions.push({category: transaction.category, amount: transaction.amount});
                return aggregateTransactions;
              }
            }, []).map((aggTran, index) => {
              return(
                <div className="columns" key={ index }>
                  <div className="column">
                    <p>{ aggTran.category }</p>
                  </div>
                  <div className="column">
                    <p>{ aggTran.amount }</p>
                  </div>
                </div>
              );
            })}
          { this.state.user.transactions && this.state.taxButton &&
            this.state.user.transactions.reduce((aggregateTransactions, transaction) => {
              if(aggregateTransactions.some(aggregate => aggregate.category === transaction.category)) {
                const objectIndex = _.findIndex(aggregateTransactions, (aggTran) => aggTran.category === transaction.category);
                if(transaction.taxRelevant === true) {
                  aggregateTransactions[objectIndex].amount += transaction.amount;
                  return aggregateTransactions;
                } else {
                  return aggregateTransactions;
                }
              } else {
                if(transaction.taxRelevant === true) {
                  aggregateTransactions.push({category: transaction.category, amount: transaction.amount});
                  return aggregateTransactions;
                } else {
                  return aggregateTransactions;
                }
              }
            }, []).map((aggTran, index) => {
              return(
                <div className="columns" key={ index }>
                  <div className="column">
                    <p>{ aggTran.category }</p>
                  </div>
                  <div className="column">
                    <p>{ aggTran.amount }</p>
                  </div>
                </div>
              );
            }
            )}
        </div>
      </div>
    );
  }
}



export default UsersShow;
