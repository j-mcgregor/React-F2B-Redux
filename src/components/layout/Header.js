import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a href="/" className="navbar-brand">
          { branding }
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-dropdown" aria-controls="menu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="menu-dropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contacts
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/contacts" className="dropdown-item">All Contacts</Link>
                <Link to="/contacts/add" className="dropdown-item">New Contact</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Images
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/photos" className="dropdown-item">Gallery</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
