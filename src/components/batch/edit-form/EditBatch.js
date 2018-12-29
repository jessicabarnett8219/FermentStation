import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BasicEdit from "./BasicEdit"
import BottledEdit from "./BottledEdit";
import CompletedEdit from "./CompletedEdit"
import NavBar from "../../navigation/NavBar"
import CancelEditBtn from "./buttons/CancelEditBtn"
import SaveEditBtn from "./buttons/SaveEditBtn"
import StarterIngredientEdit from "./StarterIngredientEdit"
import BottleIngredientEdit from "./BottleIngredientEdit";

class EditBatch extends Component {

  state = {
    batch: "",
    initialized: false,
    // states starting with "edit" correspond to values of input fields
    editName: "",
    editType: "",
    editStartDate: "",
    editBottleDate: "",
    editCompleteDate: "",
    editReview: "",
    editRating: ""
  }

  componentDidMount() {
    // Get batch ID from dynamic route
    const { batchId } = this.props.match.params
    // Use it to fetch that batch from the database and set that batch as the current batch in state and initialized as true so that the page will render with that batch's details prepopulated in input fields
    APIManager.getEntry("batches", batchId, "?_expand=type")
      .then(batchObj => {
        this.setState({
          batch: batchObj,
          editName: batchObj.name,
          editType: batchObj.typeId,
          editStartDate: batchObj.startDate,
          editBottleDate: batchObj.bottleDate,
          editCompleteDate: batchObj.completeDate,
          editReview: batchObj.review,
          editRating: batchObj.rating,
        }, () => {
          // get all ingredients associated with that batch and filter them based on category so they can display in the appropriate output area (starter or bottled)
          APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batch.id}&_expand=ingredient`)
            .then(ingredients => {
              return ingredients.filter(i => i.ingredient.categoryId !== 5)
            })
            .then(ingredients => {
              this.setState({ starterIngredients: ingredients }, () => {
                APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
                  .then(ingredients => {
                    return ingredients.filter(i => i.ingredient.categoryId === 5)
                  })
                  .then(ingredients => {
                    this.setState({ bottleIngredients: ingredients, initialized: true })
                  })
              })
            })
        })
      })
  }

  // sets the state associated with input field as the user types or selects
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  // sets the state of edit type as the user makes a radio button selection
  handleFieldChangeType = (evt) => {
    let targetValue = evt.target.value
    this.setState({ editType: +targetValue })
  }

  // sets the state of edit rating as the user makes a radio button selection
  handleFieldChangeRating = (evt) => {
    let targetValue = evt.target.value
    this.setState({ editRating: targetValue })
  }

  // Make the object that will be passed into the patch fetch call in handleSave function
  constructEditedBatch = () => {
    let editedBatch = {
      name: this.state.editName,
      typeId: this.state.editType,
      review: this.state.editReview,
      startDate: this.state.editStartDate,
      bottleDate: this.state.editBottleDate,
      completeDate: this.state.editCompleteDate,
      starterIngredients: this.state.editStarterIngredients,
      bottleIngredients: this.state.editBottleIngredients,
      batchAmount: this.state.editAmount,
      measurement: this.state.editMeasurement,
      rating: this.state.editRating
    }
    return editedBatch
  }

  // Called on click of the save button at the bottom of edit form
  handleSave = () => {
    let editedBatch = this.constructEditedBatch()
    APIManager.editEntry("batches", this.state.batch.id, editedBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batch.id}`)
      })

  }

  render() {
    if (this.state.initialized === true) {
      return (
        <React.Fragment>
          <NavBar {...this.props} />
          <div className="container">
            {this.state.batch.status === 1 ?
              <React.Fragment>
                <BasicEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeType={this.handleFieldChangeType} batch={this.state.batch} />
                <StarterIngredientEdit batchId={this.state.batch.id} batchType={this.state.batch.typeId} />
              </React.Fragment> : this.state.batch.status === 2
                ? <React.Fragment>
                  <BasicEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeType={this.handleFieldChangeType} batch={this.state.batch} />
                  <BottledEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeType={this.handleFieldChangeType} batch={this.state.batch} {...this.props} />
                  <StarterIngredientEdit batchId={this.state.batch.id} batchType={this.state.batch.typeId} />
                  <BottleIngredientEdit batchId={this.state.batch.id} batchType={this.state.batch.typeId} />
                </React.Fragment>
                : this.state.batch.status === 3
                  ? <React.Fragment>
                    <BasicEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeType={this.handleFieldChangeType} batch={this.state.batch} />
                    <CompletedEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeType={this.handleFieldChangeType} batch={this.state.batch} handleFieldChangeRating={this.handleFieldChangeRating} {...this.props} />
                    <StarterIngredientEdit batchId={this.state.batch.id} batchType={this.state.batch.typeId} />
                    <BottleIngredientEdit batchId={this.state.batch.id} batchType={this.state.batch.typeId} />
                  </React.Fragment>
                  : null}

            <div className="flex justify-content-center margin-bottom-s">
              <SaveEditBtn startDate={this.state.startDate} bottleDate={this.state.bottleDate} completeDate={this.state.completeDate} handleSave={this.handleSave} />
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

}

export default EditBatch