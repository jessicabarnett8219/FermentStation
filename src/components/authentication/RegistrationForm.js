import React, { Component } from "react"

class RegistrationForm extends Component {

  render() {
    return (
      <React.Fragment>
        <div className={this.props.hideForm ? "hideForm" : null}>
          <strong><label htmlFor="firstName">First Name</label></strong>
          <input id="firstName" placeholder="First Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <strong><label htmlFor="lastName">Last Name</label></strong>
          <input id="lastName" placeholder="Last Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <strong><label htmlFor="registerEmail">Email/Username</label></strong>
          <input id="registerEmail" placeholder="Email" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <strong><label htmlFor="registerPassword">Password</label></strong>
          <input id="registerPassword" placeholder="Password" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <div className="flex justify-content-center margin-top-xs">
            <button className="button info margin-left-xs" onClick={(evt) => {
              this.props.handleRegistration(evt)
            }}>Register</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RegistrationForm