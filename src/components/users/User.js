import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      ></img>
      <h4>{login}</h4>
      <div>
        <Link to={`user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

User.defaultProps = {
  login: 'SameshB',
  avatar_url: 'https://avatars3.githubusercontent.com/u/48585698?s=400&v=4',
  html_url: 'https://github.com/SameshB'
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
