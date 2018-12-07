import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Grid, Header} from 'semantic-ui-react'
import "../../../index.css"

class MainMenu extends Component {

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Welcome, Wally</Header>
          <Link to="/new-batch"><Button fluid>Start a New Batch</Button></Link>
          <Link to="/brewing-list"><Button fluid>View Now-Brewing</Button></Link>
          <Link to="/bottled-list"><Button fluid>View Bottled</Button></Link>
          <Link to="/completed-list"><Button fluid>View Completed</Button></Link>
        </Grid.Column>
      </Grid>
    )
  }
}
export default MainMenu