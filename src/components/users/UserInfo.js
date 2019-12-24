import React, { Component } from 'react';

class UserInfo extends Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.login);
  }
  render() {
    const { login } = this.props.user;
    return <div>{login}</div>;
  }
}

export default UserInfo;
