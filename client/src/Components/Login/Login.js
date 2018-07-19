import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {

  constructor() {

    super();
    this.state = {
      username: '',
      password: '',
    };

  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    axios.post('/api/auth/login', { username, password })
    .then((result) => {
      localStorage.setItem('jwtToken', result.data.token);
      this.setState({ message: '' });
      this.props.history.push('/')
    })
    .catch((error) => {
      if(error.response.status === 401) {
        this.setState({ message: 'Login failed. Username or password not match' });
      }
    });
}

render() {
  const { username, password, message } = this.state;
  return (
    <div className="container">
      <form className="form-signin" onSubmit={this.onSubmit}>
     
        
        {/* <h2 className="subtext">Please sign in</h2> */}
          <label for="inputEmail" className="sr-only"><h3>Email address</h3></label>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" className="sr-only"><h3>Password</h3></label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn login" type="submit">Login</button>
          {/* <p>Not a member?<a href="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</a>
          </p> */}
        </form>
      </div>
    );
  }
}

export default Login;