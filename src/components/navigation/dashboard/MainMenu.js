import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Grid, Header } from 'semantic-ui-react'
import "../MainMenu.css"

class MainMenu extends Component {

  render() {
    return (
      <div className="MainMenu-container">
        <Header as="h1" textAlign="center">Welcome, Wally</Header>
        <Button.Group vertical>
          <Link to="/new-batch"><Button className="MainMenu-btn">Start a New Batch</Button></Link>
          <Link to="/brewing-list"><Button >View Now-Brewing</Button></Link>
          <Link to="/bottled-list"><Button >View Bottled</Button></Link>
          <Link to="/completed-list"><Button >View Completed</Button></Link>
          <Link to="/completed-list"><Button >View Completed</Button></Link>
          <Button onClick={
            () => {
              sessionStorage.clear() || localStorage.clear()
              this.props.history.push("/welcome")
            }
          }>Logout</Button>
        </Button.Group>
      </div>
    )
  }
}
export default MainMenu