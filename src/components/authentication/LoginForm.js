import React, { Component } from "react"
import { Grid, Form, Button, Header, Item } from 'semantic-ui-react'


class LoginForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Input fluid label="Email" type="text" />
          <Form.Input fluid label="Password" type="text" />
          <Button>Login</Button>
        </Form>
      </div>
    )
  }
}
export default LoginForm