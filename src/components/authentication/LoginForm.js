import React, { Component } from "react"

class LoginForm extends Component {

  render() {
    return (
      <div className={this.props.hideLogin ? "hideLogin" : null}>
        <strong><label htmlFor="loginEmail">Email/Username</label></strong>
        <input id="loginEmail" placeholder="Email" type="text" className="" onChange={
          (evt) => {
            this.props.handleFieldChange(evt)
          }
        } />
        <strong><label htmlFor="loginPassword">Password</label></strong>
        <input id="loginPassword" placeholder="Password" className="margin-bottom-s" type="text" onChange={
          (evt) => {
            this.props.handleFieldChange(evt)
          }
        } />
        <label className="control checkbox info margin-bottom-s">
          <input type="checkbox" name="checkbox" id="remember" className="" onClick={
            (evt) => {
              this.props.handleFieldChange(evt)
            }
          } />
          <span className="control-indicator"></span>
          <span className="control-label">Remember Me</span>
        </label>
        <div className="flex justify-content-center">
          <button className="button info button-l margin-bottom-xs" onClick={
            (evt) => {
              this.props.handleLogin(evt)
            }
          }>Login</button>
        </div>
      </div>
    )
  }
}

export default LoginForm