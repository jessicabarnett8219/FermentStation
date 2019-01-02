import React, { Component } from "react"

class LoginForm extends Component {

  render() {
    return (
      <div className={this.props.hideLogin ? "hideLogin" : null}>
        <strong><label className="font-size-l" htmlFor="loginEmail">Email/Username</label></strong>
        <input id="loginEmail" placeholder="Email" type="text" className="input-l" onChange={
          (evt) => {
            this.props.handleFieldChange(evt)
          }
        } />
        <strong><label className="font-size-l" htmlFor="loginPassword">Password</label></strong>
        <input id="loginPassword" placeholder="Password" className="margin-bottom-s input-l" type="text" onChange={
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
          <button className="button info button-xl margin-bottom-xs sticky-button" onClick={
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