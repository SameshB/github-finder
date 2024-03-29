import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/users/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';
import UserInfo from './components/users/UserInfo';
import About from './components/pages/About';

import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=$(process.env.REACT_APP_GITHUB_CLIENT_ID)&client_secret=$(process.env.REACT_APP_GITHUB_CLIENT_SECRET)`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async searchText => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  getUserInfo = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  clearUsers = () => this.setState({ users: [] });

  // Setting whatever the msg is sent from Search.js to state
  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { loading, users, user } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            {/* Display Alert msg from state */}
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                path='/'
                exact
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route path='/about' exact component={About}></Route>
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <UserInfo
                    {...props}
                    getUserInfo={this.getUserInfo}
                    user={user}
                    loading={loading}
                  />
                )}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
