import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault(); //needs to be in as we are clicking on an <a> tag
    Auth.logout();
    history.push('/'); // the last item in the history array is actually the current location
  }

  const user = Auth.getPayload();


  return(

    <nav className="navbar is-active" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item">
            <img src="https://www.moneywise.co.uk/sites/default/files/styles/node_full_top/public/images/articles/taxonmoney.jpg?itok=joxBpyNg" alt="Tax" width="80" height="60"/>
          </div>
        </Link>
        <div className="navbar-item">
          { !Auth.isAuthenticated() &&
          <Link to="/login" className="standard-button">Login</Link>
          }
        </div>
        <div className="navbar-item">
          { !Auth.isAuthenticated() &&
          <Link to="/register" className="standard-button">Register</Link>
          }
        </div>
        <div className="navbar-item">
          { Auth.isAuthenticated() &&
          <Link to="/transactions" className="standard-button">Heat Map</Link>
          }
        </div>
        <div className="navbar-item">
          { Auth.isAuthenticated() &&
          <a href="#" className="standard-button" onClick={logout}>Logout</a>
          }
        </div>
        <div className="navbar-item">
          { Auth.isAuthenticated() &&
          <Link to={`/users/${user.userId}`} className="standard-button">Profile</Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
