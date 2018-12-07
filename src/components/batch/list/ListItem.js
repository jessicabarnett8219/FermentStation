import React, { Component } from "react"
import { Button, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"


class ListItem extends Component {
  render() {
    return (
      <div>
        <List.Item>
          <List.Content floated='right'>
            <Link to={`/batches/${this.props.id}`}><Button>Details</Button></Link>
          </List.Content>
          <List.Content>
            <Header size="medium">Name</Header>
            {this.props.name}
          </List.Content>
          <List.Content>
            <Header size="medium">Brewing Since</Header>
            {this.props.startDate}
          </List.Content>
        </List.Item>
      </div>
    )

  }
}
export default ListItem