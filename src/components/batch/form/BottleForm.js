import React, { Component } from "react"
import { Grid, Form, Button, Header } from 'semantic-ui-react'
import "../../FermentStation.css"
import APIManager from "../../../modules/APIManager"


class BottleForm extends Component {

  state = {
    batchName: "",
    startDate: "",
    batchId: ""
  }

  componentDidMount() {
    const {batchId} = this.props.match.params
    APIManager.getEntry("batches", batchId)
    .then(batch => {
      this.setState({
        batchName: batch.name,
        batchId: batch.id,
        startDate: batch.startDate
      })
    })
  }

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
            <Header as="h1" textAlign="center">Bottle {this.state.batchName}<Header.Subheader>Brewing Since: {this.state.startDate}</Header.Subheader></Header>
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