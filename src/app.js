import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import UsersShow  from './components/users/UsersShow';
import TransactionsShow  from './components/transactions/TransactionsShow';
import TransactionsIndex  from './components/transactions/TransactionsIndex';
import Navbar      from './components/utility/Navbar';
import ProtectedRoute from './components/utility/ProtectedRoute';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/users/:id" component={UsersShow} />
            <ProtectedRoute path="/transactions/:id" component={TransactionsShow} />
            <ProtectedRoute exact path="/transactions" component={TransactionsIndex} />
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
