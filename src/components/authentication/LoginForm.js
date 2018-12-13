import React, { Component } from "react"

class LoginForm extends Component {

  render() {
    return (
      <div>
        <input id="loginEmail" placeholder="Email" type="text" onChange={
          (evt) => {
            this.props.handleFieldChange(evt)
          }
        } />
        <input id="loginPassword" placeholder="Password" type="text" onChange={
          (evt) => {
            this.props.handleFieldChange(evt)
          }
        } />
        <label className="control checkbox">
          <input type="checkbox" name="checkbox" id="remember" className="color-secondary" onClick={
            (evt) => {
              this.props.handleFieldChange(evt)
            }
          } />
          <span className="control-indicator"></span>
          <span className="control-label">Remember Me</span>
        </label>
        <div className="flex justify-content-center">
          <button className="button info" onClick={
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