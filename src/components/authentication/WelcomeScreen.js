import React, { Component } from "react"
import LoginForm from "./LoginForm"
// import RegistrationForm from "./RegistrationForm";
import { Header, Grid, Divider, Button } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"
import RegistrationForm from "./RegistrationForm"
import "./WelcomeScreen.css"

class WelcomeScreen extends Component {

  state = {
    loginEmail: "",
    loginPassword: "",
    remember: "",
    registerEmail: "",
    registerPassword: "",
    firstName: "",
    lastName: "",
    hideForm: true
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
    const newUser = this.constructNewUser()
    APIManager.addEntry("users", newUser)
  }

  toggleNewForm = () => {
    const currentState = this.state.hideForm;
    this.setState({
      hideForm: !currentState,
    });
  }

  render() {
    return (
      <Grid container columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">FermentStation</Header>
          <LoginForm handleFieldChange={this.handleFieldChange} handleLogin={this.handleLogin} loginEmail={this.state.loginEmail} loginPassword={this.state.loginPassword} {...this.props} />
          <Divider />
          <Header size="small" textAlign="center">New here?</Header>
          <Button onClick={
            () => {
              this.toggleNewForm()
            }
          }>Create an Account</Button>
          <RegistrationForm hideForm={this.state.hideForm} handleFieldChange={this.handleFieldChange} handleRegistration={this.handleRegistration}/>
        </Grid.Column>
      </Grid>

    )
  }
}

export default WelcomeScreen