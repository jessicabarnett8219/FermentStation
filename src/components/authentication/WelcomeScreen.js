import React, { Component } from "react"
import LoginForm from "./LoginForm"
// import RegistrationForm from "./RegistrationForm";
import { Header, Grid, Divider, Button } from 'semantic-ui-react'



class WelcomeScreen extends Component {
  render() {
    return(
      <Grid container columns={1} padded={true}>
      <Grid.Column>
      <Header as="h1" textAlign="center">FermentStation</Header>
        <LoginForm />
        <Divider />
        <Header size="small" textAlign="center">New here?</Header>
        <Button>Create an Account</Button>
        </Grid.Column>
      </Grid>

    )
  }
}

export default WelcomeScreen