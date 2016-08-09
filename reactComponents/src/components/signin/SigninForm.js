import React from 'react';
import SigninQuestionLabel from './SigninQuestionLabel';

function SigninPassword() {
  return (
    <div className="form-group">
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        className="form-control" />
    </div>
  );
}

function SignupMessage() {
  return (
    <p>Please <a href="#">signup here</a></p>
  );
}

function SigninForm(props) {
  return (
    <div className="Signin-Form">
      <div className="container-fluid">
        <h3>Sign in</h3>
        <form noValidate autoComplete="off">
          <div className="SigninLogin-Email">
            <div className="row">
              <div className="col-xs-12">
                  <SigninQuestionLabel message="What is your email address?" />
                  <label htmlFor="name">My e-mail address is:</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="form-control" />
              </div>
            </div>
          </div>

          <div className="SigninLogin-Password">
            <div className="row">
              <div className="col-xs-12">
                <SigninQuestionLabel message="Do you have a password?" />
                <div className="form-group">
                  <input
                    id="password"
                    type="radio"
                    name="hasPassword"
                    checked={!props.hasPassword}
                    onChange={props.onChangeHasPasswordNo} />
                  <label className="SigninLogin-Label" htmlFor="hasPassword">No, Im a new customer</label>
                </div>

                <div className="form-group">
                  <input
                    id="password"
                    type="radio"
                    name="hasPassword"
                    checked={props.hasPassword}
                    onChange={props.onChangeHasPasswordYes}  />
                  <label className="SigninLogin-Label" htmlFor="hasPassword">Yes I have a password</label>
                </div>
                {props.hasPassword ? <SigninPassword /> : <SignupMessage />}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;