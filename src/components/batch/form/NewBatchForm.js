import React, { Component } from "react"
import { Grid, Form, Label, Button, Header } from 'semantic-ui-react'


class NewBatchForm extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
      <Grid.Column>
        <Header as="h1" textAlign="center">Start a New Batch</Header>
        <Form>
          <Form.Input fluid label="Batch Name" type="text" />
          <Form.Input fluid label="Expected Bottling Date" type="date" />
          <Form.Group inline>
            <label>Ferment Type</label>
            <Form.Radio label="Water Kefir" />
            <Form.Radio label="Kombucha" />
          </Form.Group>
          <Form.Input label="Amount" type="text" />
          <Form.Input label="Ingredients" type="text" />
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default NewBatchForm