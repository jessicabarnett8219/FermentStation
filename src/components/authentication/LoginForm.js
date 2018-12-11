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
          <input id="remember" type="checkbox" onClick={
            (evt) => {
              this.props.handleFieldChange(evt)
            }
          }/>Remember Me <br></br>
          <button onClick={
            (evt) => {
              this.props.handleLogin(evt)
            }
          }>Login</button>
      </div>
    )
  }
}
export default LoginForm