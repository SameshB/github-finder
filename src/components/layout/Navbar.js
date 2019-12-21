import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ logo, title }) => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1>
          <i className={logo}></i> {title}
        </h1>
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
