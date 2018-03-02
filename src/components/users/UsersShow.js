/* global accounting */

import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import _ from 'lodash';
import Moment from 'moment';

import TaxButton  from '../../components/utility/TaxButton';

accounting.settings.currency.format = {
  pos: '%s %v',   // for positive values, eg. "$ 1.00" (required)
  neg: '%s (%v)', // for negative values, eg. "$ (1.00)" [optional]
  zero: '%s  -- '  // for zero values, eg. "$  --" [optional]
};

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
      .get(`/api/users/${this.props.match.params.id}`) // NEED TO CHANGE TO MAKE DYNAMIC
      .then(res => {
        this.setState({ user: res.data, aggTran: this.aggregator(res.data) });
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
        <h1>{ this.state.user.first } { this.state.user.last }</h1>
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
                    <p>{ accounting.formatMoney(tran.amount, '£', 2) }</p>
                  </div>
                </div>
              );
            })}
          {this.state.aggTran.everything && !this.state.taxButton &&
              <div>
                <p>Total: { accounting.formatMoney((this.state.aggTran.taxable.reduce((total, tran) => total + tran.amount, 0)), '£', 2) }</p>
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
                    <p>{ accounting.formatMoney(tran.amount, '£', 2) }</p>
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
                    <p> { Moment(transaction.date).format('Do MMMM YYYY, h:mm:ss a') }</p>
                  </div>
                </Link>
                <Link to = {`../transactions/${ transaction.id }`}>
                  <div className="column">
                    <p>{ accounting.formatMoney(transaction.amount, '£', 2)}</p>
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
