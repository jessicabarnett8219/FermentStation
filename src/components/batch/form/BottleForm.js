import React, { Component } from "react"
import { Grid, Form, Button, Header } from 'semantic-ui-react'


class BottleForm extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
      <Grid.Column>
        <Header as="h1" textAlign="center">Bottle A Batch</Header>

        <Form>
          <Form.Input fluid label="Bottling Date" type="date" />
          <Form.Input fluid label="Expected Sampling Date" type="date" />
          <Form.Input label="Flavor Ingredients" type="text" />
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default BottleForm