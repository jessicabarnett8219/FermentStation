import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
// import APIManager from "../../modules/APIManager"

class LoginForm extends Component {

  render() {
    return (
      <div>
        <Form>
          <Form.Input id="loginEmail" fluid placeholder="Email" type="text" onChange={
            (evt) => {
              this.props.handleFieldChange(evt)
            }
          } />
          <Form.Input id="loginPassword" fluid placeholder="Password" type="text" onChange={
            (evt) => {
              this.props.handleFieldChange(evt)
            }
          } />
          <Form.Input id="remember" label="Remember Me" type="checkbox" onClick={
            (evt) => {
              this.props.handleFieldChange(evt)
            }
          }/>
          <Button onClick={
            (evt) => {
              this.props.handleLogin(evt)
            }
          }>Login</Button>
        </Form>
      </div>
    )
  }
}
export default LoginForm