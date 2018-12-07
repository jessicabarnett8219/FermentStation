import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"


class PastBatchesList extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Completed</Header>
          <List divided>
            <List.Item>
              <List.Content floated='right'>
              <Link to="./batches/1"><Button>Details</Button></Link>
              </List.Content>
              <List.Content><Header size="medium">My First Ferment <Header.Subheader>Completed On: 12/21/18</Header.Subheader></Header></List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated='right'>
              <Link to="./batches/1"><Button>Details</Button></Link>
              </List.Content>
              <List.Content><Header size="medium">Grape Soda <Header.Subheader>Completed On: 12/20/18</Header.Subheader></Header></List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated='right'>
              <Link to="./batches/1"><Button>Details</Button></Link>
              </List.Content>
              <List.Content><Header size="medium">Ginger Blueberry <Header.Subheader>Completed On: 12/20/18</Header.Subheader></Header></List.Content>
            </List.Item>

          </List>
        </Grid.Column>
      </Grid>
    )
  }
}
export default PastBatchesList