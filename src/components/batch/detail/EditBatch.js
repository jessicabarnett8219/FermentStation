import React, { Component } from "react"
import { Grid, Button, Header, List, Form } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"


class EditBatch extends Component {

  state = {
    batch: "",
    initialized: false,
    currentUser: "",
    editName: "",
    editStartDate: "",
    editBottleDate: "",
    editCompleteDate: "",
    editStarterIngredients: "",
    editBottleIngredients: "",
    editReview: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    const currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId }, () => {
      APIManager.getEntry("batches", batchId, "?_expand=type")
        .then(batchObj => {
          this.setState({ batch: batchObj }, () => this.setState({ initialized: true }, () => console.log(this.state)))
        })
    })

  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructEditedBatch = () => {
    let newBatch = {
      name: this.state.editName,
      typeId: 1,
      review: this.state.editReview,
      startDate: this.state.editStartDate,
      bottleDate: this.state.editBottleDate,
      completeDate: this.state.editCompleteDate,
      starterIngredients: this.state.editStarterIngredients,
      bottleIngredients: this.state.editBottleIngredients
    }
    return newBatch
  }

  handleSave = () => {
    let editedBatch = this.constructEditedBatch()
    APIManager.editEntry("batches", this.state.batch.id, editedBatch)
      .then((editedBatch) => {
        return editedBatch.id
      })

  }

  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <div>
            <Form>
            <Form.Input id="editName" fluid label="Batch Name" type="text" defaultValue={this.state.batch.name} onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />

            <Form.Input id="editStartDate" fluid label="Start Date" type="date" selected={this.state.batch.startDate} onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />

            <Form.Input id="editBottleDate" selected={this.state.batch.bottleDate}fluid label="Expected Bottling Date" type="date" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />
            <Form.Input id="editstarterIngredients" defaultValue={this.state.batch.starterIngredients} label="Starter Ingredients" type="text" onChange={
              (evt) => { this.handleFieldChange(evt) }
            } />
            </Form>
            <Button onClick={() => {
              this.handleSave()
            }}>Save</Button>
            <Button>Cancel</Button>
          </div>
        )
      } else if (this.state.batch.status === 2) {
        return (
          <div>
            <h1>Edit Bottled</h1>
          </div>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
          <div>
            <h1>Edit Complete</h1>
          </div>
        )
      }
    }
    else {
      return (
        <div>
        </div>
      )
    }

  }





}


export default EditBatch