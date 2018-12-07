import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
import "./WelcomeScreen.css"



class RegistrationForm extends Component {

  render() {
    return (
      <div>
        <Form className={this.props.hideForm ? "hideForm" : null}>
          <Form.Input fluid id="firstName" placeholder="First Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }}/>
          <Form.Input fluid id="lastName" placeholder="Last Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }}/>
          <Form.Input fluid id="registerEmail" placeholder="Email" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }}/>
          <Form.Input fluid id="registerPassword" placeholder="Password" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }}/>
          <Button onClick={(evt) => {
            this.props.handleRegistration(evt)
          }}>Register</Button>
        </Form>
      </div>
    )
  }
}
export default RegistrationForm