import React, { Component } from "react"
import { Grid, Button, Header, List, Form } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"
import BrewingEdit from "./brewing/BrewingEdit";

// TODO fix date input value issue - prepopulating and saving


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
          this.setState({ batch: batchObj }, () => this.setState({ initialized: true }))
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
      .then(() => {
        this.props.history.push(`/batches/${this.state.batch.id}`)
      })

  }

  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <BrewingEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} batch={this.state.batch}/>
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