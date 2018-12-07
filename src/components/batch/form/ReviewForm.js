import React, { Component } from "react"
import { Grid, Form, Button, Header } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"



class SampleForm extends Component {
  state = {
    batchName: "",
    startDate: "",
    batchId: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batchName: batch.name,
          batchId: batch.id,
          bottleDate: batch.bottleDate
        })
      })
  }

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Review {this.state.batchName}<Header.Subheader>Bottled Since: {this.state.bottleDate}</Header.Subheader></Header>
          <Form>
            <Form.Input fluid label="Completion Date" type="date" />
            <Form.Group>
              <label>Rating</label>
              <Form.Radio label="Positive" />
              <Form.Radio label="Negative" />
            </Form.Group>
            <Form.Input label="Review" type="text" />
            <Button>Cancel</Button>
            <Button>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default SampleForm