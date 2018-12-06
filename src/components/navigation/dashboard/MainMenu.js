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
          <Button fluid={true}><Link to="/new-batch">Start a New Batch</Link></Button>
          <Button fluid={true}><Link to="/brewing-batches">View Brewing Batches</Link></Button>
          <Button fluid={true}><Link to="/bottled-batches">View Bottled Batches</Link></Button>
          <Button fluid={true}><Link to="/past-batches">View Past Batches</Link></Button>
        </Grid.Column>
      </Grid>
    )
  }
}
export default MainMenu