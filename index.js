import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'





var LoginText = React.createClass({

  handleTextChange: function(e) {
    var textVal = e.target.value;
    this.props.onChangeEvent({value:textVal});
  },

  render: function() {
    return (

        <input
          type="text"
          className = "loginText"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.handleTextChange}
        />
    );
  }
});


var LoginForm = React.createClass({
  getDefaultProps : function() {
   return {defaultUser:"Your user Id", defaultPassword:"Your Password"};
  },
  getInitialState: function() {
    return {user: '', password: ''};
  },
  handleUserChange: function(obj) {
    this.setState({user: obj.value});
  },
  handlePasswordChange: function(obj) {
    this.setState({password: obj.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var user = this.state.user.trim();
    var password = this.state.password.trim();
  	if(user=="user1" && password=="password1"){
  		window.location="/#/success";
  		}
  	else{
  		window.location="/#/error";
  		}
  },
  render: function() {
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <h2>Login Form</h2>
        User Id  : <LoginText value={this.state.user} placeholder={this.props.defaultUser} onChangeEvent={this.handleUserChange}/> <br/>
        Password : <LoginText value={this.state.password} placeholder={this.props.defaultPassword} onChangeEvent={this.handlePasswordChange}/> <br/>
        <input type="submit" value="Log In" /><br/><br/><br/>
        Note: Please use user1/password1 for successful login.
      </form>
    );
  }
});

var successBox = React.createClass({

 

  render: function() {
    return (

        <div className="success"> Logged In Successfully. </div>
    );
  }
});

var errorBox = React.createClass({

 

  render: function() {
    return (

        <div className="error"> Invalid Login Details </div>
    );
  }
});


render(
  (<Router history={hashHistory}>
    <Route path="/" component={LoginForm}/>
    <Route path="/success" component={successBox}/>
    <Route path="/error" component={errorBox}/>
  </Router>),
  document.getElementById('app')
)
