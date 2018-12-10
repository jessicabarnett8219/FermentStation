import React, { Component } from "react"
import { Grid, Form, Button, Header } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"



class ReviewForm extends Component {
  state = {
    batch: "",
    batchId: "",
    completeDate: "",
    review: "",
    rating: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({ batchId: batchId })
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batch: batch,
          bottleDate: batch.bottleDate
        })
      })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructCompletedBatch = () => {
    let completedBatch = {
      rating: this.state.rating,
      review: this.state.review,
      completeDate: this.state.completeDate,
      status: 3,
    }
    return completedBatch
  }

  handleSave = () => {
    let completedBatch = this.constructCompletedBatch()
    APIManager.editEntry("batches", this.state.batchId, completedBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batchId}`)
      })

  }
  handleFieldChangeRadio = (evt) => {
    let targetValue = evt.target.value
    this.setState({ rating: targetValue })
  }

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Review {this.state.batchName}<Header.Subheader>Bottled Since: {this.state.bottleDate}</Header.Subheader></Header>
          <Form>
            <Form.Input fluid label="Completion Date" type="date" id="completeDate" onChange={(evt) => {
              this.handleFieldChange(evt)
            }} />

            <label>Rating</label>
            <label htmlFor="positive">Positive</label>
            <input type="radio" name="rating" value="positive" defaultChecked onChange={(evt) => {
              this.handleFieldChangeRadio(evt)
            }} />
            <label htmlFor="negative">Negative</label>
            <input type="radio" name="rating" value="negative" onChange={(evt) => {
              this.handleFieldChangeRadio(evt)
            }} />

            <Form.Input label="Review" type="text" id="review" onChange={(evt) => {
              this.handleFieldChange(evt)
            }} />
            <Button onClick={
              () => {
                this.props.history.push(`/batches/${this.state.batchId}`)
              }
            }>Cancel</Button>
            <Button onClick={() => {
              this.handleSave()
            }}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default ReviewForm