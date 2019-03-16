import React, { Component } from "react";

class Login extends Component {
  state = {};
  styles = {
    align_self: true
}
  render() {
    return (
      <React.Fragment className="mw-25">
        <div className="mw-25">
          <form className="form-signin">
            <img
              className="mb-4"
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
