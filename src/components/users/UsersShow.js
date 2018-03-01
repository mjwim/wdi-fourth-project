import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import _ from 'lodash';

import TaxButton  from '../../components/utility/TaxButton';

class UsersShow extends React.Component {
  state = {
    user: {},
    aggTran: {
      taxable: null,
      everything: null
    },
    taxButton: false
  }

  aggregator = (user) => {
    return user.transactions.reduce((taxObject, trans) => {
      if(trans.taxRelevant) {

        if(taxObject.taxable.some(taxableTrans => taxableTrans.category === trans.category)) {
          const objectIndex = _.findIndex(taxObject.taxable, (aggTran) => aggTran.category === trans.category);
          taxObject.taxable[objectIndex].amount += trans.amount;
        } else {
          taxObject.taxable.push({category: trans.category, amount: trans.amount});
        }

        if(taxObject.everything.some(taxableTrans => taxableTrans.category === trans.category)) {
          const objectIndex = _.findIndex(taxObject.everything, (aggTran) => aggTran.category === trans.category);
          taxObject.everything[objectIndex].amount += trans.amount;
        } else {
          taxObject.everything.push({category: trans.category, amount: trans.amount});
        }

      } else {

        if(taxObject.everything.some(taxableTrans => taxableTrans.category === trans.category)) {
          const objectIndex = _.findIndex(taxObject.everything, (aggTran) => aggTran.category === trans.category);
          taxObject.everything[objectIndex].amount += trans.amount;
        } else {
          taxObject.everything.push({category: trans.category, amount: trans.amount});
        }
      }
      return taxObject;
    }, {taxable: [], everything: []});
  }
  componentDidMount() {
    Axios
      .get('/api/users/5a981a7f592f7da7d8768fc3') // NEED TO CHANGE TO MAKE DYNAMIC
      .then(res => {
        this.setState({ user: res.data, aggTran: this.aggregator(res.data) },() => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  taxButtonToggle = () => {
    this.setState({ taxButton: !this.state.taxButton });
  }

  transactionTaxToggle = (transaction) => {
    Axios
      .put(`/api/transactions/${transaction.id}`)
      .then(() => {
        this.setState(prevState => {
          const newState = prevState;
          const transactions = prevState.user.transactions.map(_transaction => {
            if(_transaction.id === transaction.id) _transaction.taxRelevant = !_transaction.taxRelevant;
            return _transaction;
          });
          newState.user.transactions = transactions;
          newState.aggTran = this.aggregator(prevState.user);
          return newState;
        });
      });
  }

  render() {
    return (
      <div>
        <img src={ this.state.user.image }/>
        <h1>{ this.state.user.username }</h1>
        <div>
          <TaxButton
            taxButtonToggle={ this.taxButtonToggle }/>
          { this.state.aggTran.taxable && !this.state.taxButton &&
            this.state.aggTran.taxable.map((tran, index) => {
              return(
                <div className="columns" key={ index }>
                  <div className="column">
                    <p>{ tran.category }</p>
                  </div>
                  <div className="column">
                    <p>{ tran.amount }</p>
                  </div>
                </div>
              );
            })}
          {this.state.aggTran.everything && !this.state.taxButton &&
              <div>
                <p>Total: {this.state.aggTran.taxable.reduce((total, tran) => total + tran.amount, 0)}</p>
              </div>
          }
          { this.state.aggTran.everything && this.state.taxButton &&
            this.state.aggTran.everything.map((tran, index) => {
              return(
                <div className="columns" key={ index }>
                  <div className="column">
                    <p>{ tran.category }</p>
                  </div>
                  <div className="column">
                    <p>{ tran.amount }</p>
                  </div>
                </div>
              );
            }
            )
          }
          {this.state.aggTran.everything && this.state.taxButton &&
            <div>
              <p>Total: {this.state.aggTran.everything.reduce((total, tran) => total + tran.amount, 0)}</p>
            </div>
          }
          { this.state.user.transactions &&
          this.state.user.transactions.map((transaction, i) =>
            <div key={i}>
              <div className="columns">
                <Link to = {`../transactions/${ transaction.id }`}>
                  <div className="column">
                    <p>{ transaction.category }</p>
                  </div>
                </Link>
                <Link to = {`../transactions/${ transaction.id }`}>
                  <div className="column">
                    <p>{ transaction.counterParty.name }</p>
                  </div>
                </Link>
                <Link to = {`../transactions/${ transaction.id }`}>
                  <div className="column">
                    <p>{ transaction.date }</p>
                  </div>
                </Link>
                <Link to = {`../transactions/${ transaction.id }`}>
                  <div className="column">
                    <p>{ transaction.amount }</p>
                  </div>
                </Link>
                <div className="column">
                  <button onClick={() => this.transactionTaxToggle(transaction)}>Toggle tax</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}



export default UsersShow;
