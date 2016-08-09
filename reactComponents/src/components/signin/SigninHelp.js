import React, { Component } from 'react';

class SigninHelp extends Component {
  render() {
    return (
      <div className="SigninHelp">
        <div className="container-fluid">
          <h3>Sign In Help</h3>
          <p>Forgot your password? <a href="#">Get password help.</a></p>
          <p>Has your e-mail address changed? <a href="#">Update it here.</a></p>
        </div>
      </div>
    );
  }
}

export default SigninHelp