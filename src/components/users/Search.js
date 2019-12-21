import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    searchText: ''
  };

  static propTypes = { searchUsers: PropTypes.func.isRequired };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.searchText);
    this.setState({ searchText: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='searchText'
            placeholder='Search Users...'
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
