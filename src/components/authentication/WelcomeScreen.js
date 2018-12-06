import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm";

class WelcomeScreen extends Component {
  render() {
    return(

      <div className="grid">
        <h1>Welcome to FermentStation</h1>
        <LoginForm />
        <RegistrationForm />
        </div>
    )
  }
}

export default WelcomeScreen