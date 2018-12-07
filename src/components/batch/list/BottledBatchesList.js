import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"


class BottledBatchesList extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Batches - Bottled</Header>
          <List divided>
            <List.Item>
              <List.Content floated='right'>
                <Button><Link to="./batches/1">Details</Link></Button>
              </List.Content>
              <List.Content><Header size="medium">My First Ferment <Header.Subheader>Bottled Since: 12/05/18</Header.Subheader></Header></List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated='right'>
              <Button><Link to="./batches/1">Details</Link></Button>
              </List.Content>
              <List.Content><Header size="medium">Grape Soda <Header.Subheader>Bottled Since: 12/20/18</Header.Subheader></Header></List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated='right'>
              <Button><Link to="./batches/1">Details</Link></Button>
              </List.Content>
              <List.Content><Header size="medium">Ginger Blueberry <Header.Subheader>Bottled Since: 12/20/18</Header.Subheader></Header></List.Content>
            </List.Item>

          </List>
        </Grid.Column>
      </Grid>
    )
  }
}
export default BottledBatchesList