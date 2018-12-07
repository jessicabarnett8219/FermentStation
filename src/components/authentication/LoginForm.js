import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"

class LoginForm extends Component {

  state = {
    loginEmail: "",
    loginPassword: "",
    remember: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (evt) => {
    if (this.state.loginEmail === "" || this.state.loginPassword === "") {
      alert("No fields should be left blank")
    }
    else {
      APIManager.getAllEntries("users", `/?email=${this.state.loginEmail}&password=${this.state.loginPassword
        }`)
        .then(returns => {

          if (returns.length < 1) {
            alert("That email doesn't exist or your password doesn't match. Please try again")
          } else if (this.state.remember === "") {
            sessionStorage.setItem(
              "userId", returns[0].id
            )

          } else {
            localStorage.setItem(
              "userId", returns[0].id
            )
          }
        })
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Input id="loginEmail" fluid label="Email" type="text" onChange={
            (evt) => {
              this.handleFieldChange(evt)
            }
          } />
          <Form.Input id="loginPassword" fluid label="Password" type="text" onChange={
            (evt) => {
              this.handleFieldChange(evt)
            }
          } />
          <Form.Input id="remember" label="Remember Me" type="checkbox" onClick={
            (evt) => {
              this.handleFieldChange(evt)
            }
          }/>
          <Button onClick={
            (evt) => {
              this.handleLogin(evt)
            }
          }>Login</Button>
        </Form>
      </div>
    )
  }
}
export default LoginForm