import React, { Component } from "react"

class RegistrationForm extends Component {

  render() {
    return (
      <React.Fragment>
        <div className={this.props.hideForm ? "hideForm" : null}>
          <strong><label className="font-size-l" htmlFor="firstName">First Name</label></strong>
          <input className="input-l" id="firstName" placeholder="First Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <strong><label className="font-size-l" htmlFor="lastName">Last Name</label></strong>
          <input className="input-l" id="lastName" placeholder="Last Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <strong><label className="font-size-l" htmlFor="registerEmail">Email/Username</label></strong>
          <input className="input-l" id="registerEmail" placeholder="Email" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <strong><label className="font-size-l" htmlFor="registerPassword">Password</label></strong>
          <input className="input-l" id="registerPassword" placeholder="Password" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <div className="flex justify-content-center margin-top-s">
            <button className="button button-xl info sticky-button" onClick={(evt) => {
              this.props.handleRegistration(evt)
            }}>Register</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RegistrationForm