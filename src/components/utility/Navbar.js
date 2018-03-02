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
    <nav>
      { !Auth.isAuthenticated() &&
      <Link to="/login" className="standard-button">Login</Link>
      }
      {' '}
      { !Auth.isAuthenticated() &&
      <Link to="/register" className="standard-button">Register</Link>
      }
      {' '}
      { Auth.isAuthenticated() &&
      <Link to="/transactions" className="standard-button">Heat Map</Link>
      }
      {' '}
      { Auth.isAuthenticated() &&
      <a href="#" className="standard-button" onClick={logout}>Logout</a>
      }
      { Auth.isAuthenticated() &&
      <Link to={`/users/${user.userId}`} className="standard-button">Profile</Link>
      }
    </nav>
  );
};

export default withRouter(Navbar);
