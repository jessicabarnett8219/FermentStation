import React, { Component } from "react"

class RegistrationForm extends Component {

  render() {
    return (
      <div>
        <div className={this.props.hideForm ? "hideForm" : null}>
          <input id="firstName" placeholder="First Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <input id="lastName" placeholder="Last Name" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <input id="registerEmail" placeholder="Email" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <input id="registerPassword" placeholder="Password" type="text" onChange={(evt) => {
            this.props.handleFieldChange(evt)
          }} />
          <button className="button button-secondary" onClick={(evt) => {
            this.props.handleRegistration(evt)
          }}>Register</button>
        </div>
      </div>
    )
  }
}
export default RegistrationForm