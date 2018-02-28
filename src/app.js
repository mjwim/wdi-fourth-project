import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import UsersShow  from './components/users/UsersShow';
import TransactionsShow  from './components/transactions/TransactionsShow';
import TransactionsIndex  from './components/transactions/TransactionsIndex';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <h1><Link to="/">Tax App</Link></h1>
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/users/:id" component={UsersShow} />
            <Route path="/transactions/:id" component={TransactionsShow} />
            <Route exact path="/transactions" component={TransactionsIndex} />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
