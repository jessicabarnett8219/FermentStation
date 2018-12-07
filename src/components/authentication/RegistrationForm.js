import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'


class RegistrationForm extends Component {
  render() {
    return (
        <div>
            <Form>
              <Form.Input fluid label="First Name" type="text" />
              <Form.Input fluid label="Last Name" type="text" />
              <Form.Input fluid label="Email" type="text" />
              <Form.Input fluid label="Password" type="text" />
              <Button>Register</Button>
            </Form>
            </div>
        )
      }
    }
export default RegistrationForm