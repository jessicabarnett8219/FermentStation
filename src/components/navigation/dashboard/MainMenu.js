import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'

class MainMenu extends Component {

  render() {
    return (
      <div>
        <h1>Hello, Wally!</h1>
        <Button>Click Here</Button>
        <Label><Icon name='mail' /> 23</Label>
        <ul>
          <li>
            <Link to="/new-batch">Start a New Batch</Link>
          </li>
          <li>
            <Link to="/brewing-batches">Now Brewing Batches</Link>
          </li>
          <li>
            <Link to="/bottled-batches">Bottled Batches</Link>
          </li>
          <li>
            <Link to="/past-batches">Past Batches</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default MainMenu