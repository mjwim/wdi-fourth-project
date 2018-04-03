import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history, toggleBurgerMenu, showBurgerMenu }) => {

  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  const user = Auth.getPayload();

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item nav-bar-logo">
          </div>
        </Link>
        <div className={`navbar-burger ${showBurgerMenu ? 'is-active': '' }`} data-target="navMenu" id="navBurger" onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${showBurgerMenu ? 'is-active': '' } `} id="navMenu">
        { !Auth.isAuthenticated() &&
            <div className="navbar-item" onClick={toggleBurgerMenu}>
              <Link to="/login" className="standard-button">Login</Link>
            </div>
        }
        { !Auth.isAuthenticated() &&
        <div className="navbar-item" onClick={toggleBurgerMenu}>
          <Link to="/register" className="standard-button">Register</Link>
        </div>
        }
        { Auth.isAuthenticated() &&
        <div className="navbar-item" onClick={toggleBurgerMenu}>
          <Link to="/transactions" className="standard-button">Heat Map</Link>
        </div>
        }
        { Auth.isAuthenticated() &&
          <div className="navbar-item" onClick={toggleBurgerMenu}>
            <Link to={`/users/${user.userId}`} className="standard-button">Profile</Link>
          </div>
        }
        { Auth.isAuthenticated() &&
        <div className="navbar-item" onClick={toggleBurgerMenu}>
          <a href="#" className="standard-button" onClick={logout}>Logout</a>
        </div>
        }
      </div>
    </nav>

  );
};

export default withRouter(Navbar);
