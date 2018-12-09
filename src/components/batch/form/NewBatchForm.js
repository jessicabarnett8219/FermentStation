import React, { Component } from "react"
import { Grid, Form, Button, Header, Label } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"

// TODO fix amount unit issue, have radio buttons and amounts dynamically populate

class NewBatchForm extends Component {

  state = {
    currentUser: "",
    name: "",
    startDate: "",
    expBottlingDate: "",
    type: 2,
    starterIngredients: "",
    batchAmount: "",
    batchAmountUnit: ""
  }

  componentDidMount() {
    let currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleFieldChangeRadio = (evt) => {
    let targetValue = evt.target.value
    this.setState({type: +targetValue})
  }

  constructNewBatch = () => {
    let newBatch = {
      name: this.state.name,
      userId: this.state.currentUser,
      typeId: this.state.type,
      rating: null,
      review: null,
      startDate: this.state.startDate,
      bottleDate: this.state.expBottlingDate,
      completeDate: null,
      batchAmount: this.state.batchAmount,
      batchAmountUnit: this.state.batchAmountUnit,
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
    return (
      <Grid columns={1} padded={true} >
        <Grid.Column>
          <Header as="h1" textAlign="center">Start a New Batch</Header>
          <Form>
            <Form.Input id="name" fluid label="Batch Name" type="text" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />

            <Form.Input id="startDate" fluid label="Start Date" type="date" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />

            <Form.Input id="expBottlingDate" fluid label="Expected Bottling Date" type="date" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />
            <Form.Group >
              <label>Type</label>
              <label htmlFor="waterKefir">Water Kefir</label>
              <input type="radio" name="type" value={2} defaultChecked onChange={(evt) => {
                this.handleFieldChangeRadio(evt)
                }}/>
              <label htmlFor="kombucha">Kombucha</label>
              <input type="radio" name="type" value={1} onChange={(evt) => {
                this.handleFieldChangeRadio(evt)
                }}/>
            </Form.Group>

            <label>Amount</label>
            <Form.Input id="batchAmount" type="text" placeholder="2" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />
            <Form.Select id="batchAmountUnit" type="select" options={[{ text: "cups", value: "cups" }, { text: "ounces", value: "ounces" }]} defaultValue="cups" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />


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