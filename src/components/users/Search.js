import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, showAlert, searchUsers }) => {
  const [searchText, setSearchText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (searchText === '') {
      showAlert('Please enter something!', 'light');
    } else {
      searchUsers(searchText);
      setSearchText('');
    }
  };

  // Get real-time data from DOM to state
  const onChange = e => setSearchText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='searchText'
          placeholder='Search Users...'
          value={searchText}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default Search;
