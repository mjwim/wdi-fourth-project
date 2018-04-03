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

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item nav-bar-logo">
          </div>
        </Link>
        <div className="navbar-burger is-active" data-target="navMenu" id="navBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu is-active" id="navMenu">
        { !Auth.isAuthenticated() &&
            <div className="navbar-item">
              <Link to="/login" className="standard-button">Login</Link>
            </div>
        }
        { !Auth.isAuthenticated() &&
        <div className="navbar-item">
          <Link to="/register" className="standard-button">Register</Link>
        </div>
        }
        { Auth.isAuthenticated() &&
        <div className="navbar-item">
          <Link to="/transactions" className="standard-button">Heat Map</Link>
        </div>
        }
        { Auth.isAuthenticated() &&
          <div className="navbar-item">
            <Link to={`/users/${user.userId}`} className="standard-button">Profile</Link>
          </div>
        }
        { Auth.isAuthenticated() &&
        <div className="navbar-item">
          <a href="#" className="standard-button" onClick={logout}>Logout</a>
        </div>
        }
      </div>
    </nav>

  );
};

export default withRouter(Navbar);
