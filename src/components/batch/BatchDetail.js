import React, { Component } from "react"
import { Grid, Button, Header, Item, List } from 'semantic-ui-react'


class BatchDetail extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Batch Details</Header>
          <List>
            <List.Item>
              <List.Content floated='right'>
                <Button icon="pencil" size="mini" />
              </List.Content>
              <List.Content verticalAlign="top"><Header size="medium">Name: Grape Soda</Header></List.Content>
            </List.Item>

            <List.Item>
            <List.Content floated='right'>
                <Button icon="pencil" size="mini" />
              </List.Content>
              <List.Content><Header size="medium">Type: Water Kefir</Header></List.Content>
            </List.Item>
            <List.Item>
            <List.Content floated='right'>
                <Button icon="pencil" size="mini" />
              </List.Content>
              <List.Content><Header size="medium">Brewing Since: 12/28/18</Header></List.Content>
            </List.Item>
            <List.Item>
            <List.Content floated='right'>
                <Button icon="pencil" size="mini" />
              </List.Content>
              <List.Content><Header size="medium">Ingredients</Header></List.Content>
              <List.Content>2 cups palm sugar</List.Content>
            </List.Item>
          </List>
          <Button fluid>Bottle Batch</Button>
          <Button fluid>Delete Batch</Button>
        </Grid.Column>
      </Grid>
    )
  }
}
export default BatchDetail