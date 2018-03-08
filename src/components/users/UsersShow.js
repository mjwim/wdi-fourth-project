/* global accounting */

import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import _ from 'lodash';
import Moment from 'moment';
import Auth from '../../lib/Auth';

import '../../../node_modules/react-toggle-switch/dist/css/switch.min.css';
import ToggleSwitch from '../../components/utility/ToggleSwitch';
import TaxYearFilter from '../../components/utility/TaxYearFilter';

accounting.settings.currency.format = {
  pos: '%s %v',
  neg: '%s (%v)',
  zero: '%s  -- '
};

class UsersShow extends React.Component {
  state = {
    user: {},
    aggTran: {
      taxable: null,
      everything: null
    },
    taxButton: false,
    sortBy: 'date',
    sortDirection: 'desc',
    query: '',
    taxYearFilter: '1970|2100'
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
      .get(`/api/users/${this.props.match.params.id}`, { headers: { authorization: `Bearer ${Auth.getToken()}`}})
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

  handleTaxYear = (e) => {
    const taxYearFilter = e.target.value;
    this.setState({ taxYearFilter });
  }

  filterTaxYear = () => {
    const { taxYearFilter, aggTran } = this.state;
    const [startDate, endDate] = taxYearFilter.split('|');

    const startDateFilter = new Date(startDate);
    const endDateFilter = new Date(endDate);

    const taxObject = () => {
      if(this.state.user.transactions) {
        const user = {transactions: []};
        //
        user.transactions = _.filter(this.state.user.transactions, transaction => new Date(transaction.date).getTime() > startDateFilter.getTime() && new Date(transaction.date).getTime() < endDateFilter.getTime() );

        const taxObject = this.aggregator(user);
        return taxObject;
      }
    };

    const filteredTaxable = aggTran.taxable;
    const filteredEverything = aggTran.everything;

    return taxObject() || { taxable: filteredTaxable, everything: filteredEverything };

  }

  render() {
    const aggTranFiltered = this.filterTaxYear();

    return (
      <div className="user-show">
        { this.props.match.params.id === Auth.getPayload().userId ?
          (
            <div>
              <img src={ this.state.user.image }/>
              <h1><strong>{ this.state.user.first } { this.state.user.last }</strong></h1>
              <div className="summary-box">
                <TaxYearFilter
                  handleTaxYear={ this.handleTaxYear }
                  filterTaxYear={ this.filterTaxYear }
                />
                <ToggleSwitch
                  toggle={this.taxButtonToggle}
                  taxButton={this.state.taxButton}
                />
                {this.state.aggTran.taxable && this.state.taxButton &&
                    <div>
                      <p className="total"><strong>Tax Total: { accounting.formatMoney((aggTranFiltered.taxable.reduce((total, tran) => total + tran.amount, 0)), '£', 2) }</strong></p>
                    </div>
                }
                { this.state.aggTran.taxable && this.state.taxButton &&
                  aggTranFiltered.taxable.map((tran, index) => {
                    return(
                      <div className="columns" key={ index }>
                        <div className="column">
                          <p><strong>{ tran.category }</strong></p>
                        </div>
                        <div className="column">
                          <p>{ accounting.formatMoney(tran.amount, '£', 2) }</p>
                        </div>
                      </div>
                    );
                  })}
                {this.state.aggTran.everything && !this.state.taxButton &&
                  <div>
                    <p className="total"><strong>Total: { accounting.formatMoney((aggTranFiltered.everything.reduce((total, tran) => total + tran.amount, 0)), '£', 2)}</strong></p>
                  </div>
                }
                { this.state.aggTran.everything && !this.state.taxButton &&
                  aggTranFiltered.everything.map((tran, index) => {
                    return(
                      <div className="columns" key={ index }>
                        <div className="column">
                          <p><strong>{ tran.category }</strong></p>
                        </div>
                        <div className="column">
                          <p>{ accounting.formatMoney(tran.amount, '£', 2) }</p>
                        </div>
                      </div>
                    );
                  }
                  )
                }
              </div>
              <div className="transactions">
                { this.state.user.transactions &&
                this.state.user.transactions.map((transaction, i) =>
                  <div className="columns" key={i}>
                    <Link to= {`../transactions/${ transaction.id }`} className="transaction-link">
                      <i className="fas fa-info-circle"></i>
                    </Link>
                    <div className="column">
                      <p>{ transaction.category }</p>
                    </div>
                    <div className="column">
                      <img src={`https://logo.clearbit.com/${ transaction.counterParty.name }.com?size=50`} alt={ transaction.counterParty.name }/>
                    </div>
                    <div className="column">
                      <p> { Moment(transaction.date).format('Do MMMM YYYY') }</p>
                    </div>
                    <div className="column">
                      <p> { accounting.formatMoney((transaction.amount), '£', 2) }</p>
                    </div>
                    <div className="column">
                      <ToggleSwitch
                        toggle={this.transactionTaxToggle}
                        transaction={transaction}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
          :
          (
            <div>
              <p>You are not permitted to view this page</p>
            </div>
          )
        }
      </div>
    );
  }
}



export default UsersShow;
