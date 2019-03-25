import React, { Component } from "react"
import LoginForm from "./LoginForm"
import APIManager from "../../modules/APIManager"
import RegistrationForm from "./RegistrationForm"

class WelcomeScreen extends Component {
// This component contains all the methods for handling login and registration as well as the state of the login/registration form fields. It renders the Login and Registration components

  state = {
    loginEmail: "",
    loginPassword: "",
    remember: "",
    registerEmail: "",
    registerPassword: "",
    firstName: "",
    lastName: "",
    hideForm: true,
    hideLogin: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

//   form validation
  handleLogin = (evt) => {
    if (this.state.loginEmail === "" || this.state.loginPassword === "") {
      alert("No fields should be left blank")
    }
    // query the API for a user with that email and password
    else {
      APIManager.getAllEntries("users", `/?email=${this.state.loginEmail}&password=${this.state.loginPassword
        }`)
        .then(returns => {
            // if nothing is returned (length of less than 1) there wasn't a match. Alert user to try again
          if (returns.length < 1) {
            alert("That email doesn't exist or your password doesn't match. Please try again")
            // If there is a match and the user did not check 'remember me' set session storage to that user's id, then redirect them to home page
          } else if (this.state.remember === "") {
            sessionStorage.setItem(
              "userId", returns[0].id
            )
            this.props.history.push("/")
            // If there is a match and the user did check 'remember me' set local storage to that user's id and redirect to homepage.
          } else {
            localStorage.setItem(
              "userId", returns[0].id
            )
            this.props.history.push("/")
          }
        })
    }
  }

//   takes the information entered into the registration form and builds an object. Called inside of handleRegistration()
  constructNewUser = () => {
    return {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.registerEmail,
      password: this.state.registerPassword
    }
  }

//   Called on click of the registration button
  handleRegistration = () => {
    //   form validation
    if (this.state.registerEmail === "" || this.state.firstName === "" || this.state.lastName === "" || this.state.registerPassword === "") {
      alert("No fields should be left blank")
    } else if (this.state.registerEmail.includes("@")) {
      APIManager.getAllEntries("users", `/?email=${this.state.registerEmail}`)
        .then((returns) => {
          if (returns.length > 0) {
            alert("Tht email is already. Please use another email")
          } else {
            //   calls the function that creates the new user object and passes it to the function that adds an entry to the database
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

//   allows the registration form to be hidden at first
  toggleNewForm = () => {
    const currentState = this.state.hideForm;
    this.setState({
      hideForm: !currentState,
    });
  }

//   allows the login form to hide when the registration form is showing
  toggleLoginForm = () => {
    const currentState = this.state.hideLogin;
    this.setState({
      hideLogin: !currentState
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="padding-vertical-l padding-horizontal-xs nav-bg color-white box-shadow-xl">
          <h1 className="logo logo-main-menu text-align-center no-margin-bottom">FermentStation</h1>
          <h2 className="font-size-l text-align-center">For the Love of Fermentation</h2>
        </div>
        <div className="container padding-horizontal-m padding-top-l flex flex-column align-items-center">
          <div className="flex flex-column justify-content-center list-container">
            <LoginForm handleFieldChange={this.handleFieldChange} hideLogin={this.state.hideLogin} handleLogin={this.handleLogin} loginEmail={this.state.loginEmail} loginPassword={this.state.loginPassword} {...this.props} />
            <div className={this.state.hideLogin ? "hideLogin" : null}>
              <h5 className="text-align-center">New here?</h5>
              <div className="flex justify-content-center">
                <button className="button button-xl info button-border sticky-button" onClick={
                  () => {
                    this.toggleNewForm()
                    this.toggleLoginForm()
                  }
                }>Create an Account</button>
              </div>
            </div>
          </div>
          <div className="flex flex-column justify-content-center list-container">
            <RegistrationForm hideForm={this.state.hideForm} handleFieldChange={this.handleFieldChange} handleRegistration={this.handleRegistration} {...this.props} />
          </div>
        </div>
      </React.Fragment>)
  }
}

export default WelcomeScreen