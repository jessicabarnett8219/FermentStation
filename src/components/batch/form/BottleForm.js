import React, { Component } from "react"
import { Grid, Form, Button, Header, Item } from 'semantic-ui-react'
import "../../FermentStation.css"


class BottleForm extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
            <Header as="h1" textAlign="center">Bottle A Batch</Header>
            <p><span className="form_label">Batch Name: </span>My First Ferment</p>
            <p><span className="form_label">Brewing Since: </span>12/20/2018</p>

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