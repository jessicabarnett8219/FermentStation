import React, { Component } from "react"
import LoginForm from "./LoginForm"
import APIManager from "../../modules/APIManager"
import RegistrationForm from "./RegistrationForm"

class WelcomeScreen extends Component {

  state = {
    loginEmail: "",
    loginPassword: "",
    remember: "",
    registerEmail: "",
    registerPassword: "",
    firstName: "",
    lastName: "",
    hideForm: true,
    hideButton: false
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
            this.props.history.push("/")
          } else {
            localStorage.setItem(
              "userId", returns[0].id
            )
            this.props.history.push("/")
          }
        })
    }
  }

  constructNewUser = () => {
    return {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.registerEmail,
      password: this.state.registerPassword
    }
  }

  handleRegistration = () => {
    if (this.state.registerEmail === "" || this.state.firstName === "" || this.state.lastName === "" || this.state.registerPassword === "") {
      alert("No fields should be left blank")
    } else if (this.state.registerEmail.includes("@")) {
      APIManager.getAllEntries("users", `/?email=${this.state.registerEmail}`)
        .then((returns) => {
          if (returns.length > 0) {
            alert("Tht email is already. Please use another email")
          } else {
            const newUser = this.constructNewUser()
            APIManager.addEntry("users", newUser)
              .then(() => {
                alert("You are now registered! Please log in")
                this.props.history.push("/")
              })
          }
        })
    } else {
      alert("Please enter a valid email")
    }
  }

  toggleNewForm = () => {
    const currentState = this.state.hideForm;
    this.setState({
      hideForm: !currentState,
    });
  }

  toggleRegisterBtn = () => {
    const currentState = this.state.showButton;
    this.setState({
      showButton: !currentState
    })
  }

  render() {
    return (
      <div className="flex-column align-items-center">
        <h1 className="text-align-center no-margin-top padding-vertical-m background-info color-white">FermentStation</h1>
        <div class="container color-info flex-column align-items-center">
          <LoginForm handleFieldChange={this.handleFieldChange} handleLogin={this.handleLogin} loginEmail={this.state.loginEmail} loginPassword={this.state.loginPassword} {...this.props} />

          <h5 className="text-align-center">New here?</h5>
          <div className="flex justify-content-center">
            <button className="button info showButton" onClick={
              () => {
                this.toggleNewForm()
                this.toggleRegisterBtn()
              }
            }>Create an Account</button>
          </div>
          <div className="flex justify-content-center">
            <RegistrationForm hideForm={this.state.hideForm} handleFieldChange={this.handleFieldChange} handleRegistration={this.handleRegistration} {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeScreen