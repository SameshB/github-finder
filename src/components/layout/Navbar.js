import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logo, title }) => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1>
          <i className={logo}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  logo: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default Navbar;
