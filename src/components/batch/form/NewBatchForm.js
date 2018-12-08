import React, { Component } from "react"
import { Grid, Form, Button, Header, Radio } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"


class NewBatchForm extends Component {

  state = {
    currentUser: "",
    batchName: "",
    startDate: "",
    expBottlingDate: "",
    type: "",
    starterIngredients: ""
  }

  componentDidMount() {
    let currentUserId = sessionStorage.getItem("userId") || localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructNewBatch = () => {
    let newBatch = {
      name: this.state.batchName,
      userId: this.state.currentUser,
      typeId: 1,
      rating: null,
      review: null,
      startDate: this.state.startDate,
      bottleDate: this.state.expBottlingDate,
      completeDate: null,
      batchAmount: null,
      batchAmountUnit: null,
      status: 1,
      starterIngredients: this.state.starterIngredients,
      bottleIngredients: null
    }
    return newBatch
  }

  handleSave = () => {
    let newBatch = this.constructNewBatch()
    APIManager.addEntry("batches", newBatch)
      .then((newBatch) => {
        return newBatch.id
      })
      .then((batchId) => {
        this.props.history.push(`/batches/${batchId}`)
      })

    }

  render() {
          return(
      <Grid columns = { 1} padded = { true} >
              <Grid.Column>
                <Header as="h1" textAlign="center">Start a New Batch</Header>
                <Form>
                  <Form.Input id="batchName" fluid label="Batch Name" type="text" onChange={
                    (evt) => { this.handleFieldChange(evt) }
                  } />

                  <Form.Input id="startDate" fluid label="Start Date" type="date" onChange={
                    (evt) => { this.handleFieldChange(evt) }
                  } />

                  <Form.Input id="expBottlingDate" fluid label="Expected Bottling Date" type="date" onChange={
                    (evt) => { this.handleFieldChange(evt) }
                  } />

                  <Form.Group id="status" inline>
                    <label>Ferment Type</label>
                    <Form.Radio label="Water Kefir" value="Water Kefir" checked />
                    <Form.Radio control={Radio} label="Kombucha" value="Kombucha" />
                  </Form.Group>
                  <Form.Input id="starterIngredients" label="Starter Ingredients" type="text" onChange={
                    (evt) => { this.handleFieldChange(evt) }
                  } />
                  <Button onClick={
                    () => {
                      this.props.history.push("/")
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
export default NewBatchForm