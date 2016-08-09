import React, { Component } from 'react';
import SigninForm from './SigninForm';
import SigninHelp from './SigninHelp';

import './SigninLogin.css';

class SigninLogin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hasPassword: true
    };
  }

  onChangeHasPasswordYes = () => {
    this.setState({
      hasPassword: true
    });
  }

  onChangeHasPasswordNo = () => {
    this.setState({
      hasPassword: false
    });
  }

  render() {
    const {hasPassword} = this.state;
    return (
      <div className="SigninLogin">
        <SigninForm
          hasPassword={hasPassword}
          onChangeHasPasswordYes={this.onChangeHasPasswordYes}
          onChangeHasPasswordNo={this.onChangeHasPasswordNo} />
        <SigninHelp />
      </div>
    );
  }
}

export default SigninLogin