import React, { Component } from "react"
// import APIManager from "../../modules/APIManager"

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

        <button className="button button-secondary" onClick={
          (evt) => {
            this.props.handleLogin(evt)
          }
        }>Login</button>
      </div>
    )
  }
}
export default LoginForm