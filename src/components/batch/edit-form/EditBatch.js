import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BasicEdit from "./BasicEdit"
import BottledEdit from "./BottledEdit";
import CompletedEdit from "./CompletedEdit"
import NavBar from "../../navigation/NavBar"
import CancelEditBtn from "./buttons/CancelEditBtn"
import SaveEditBtn from "./buttons/SaveEditBtn"
import StarterIngredientEdit from "./StarterIngredientEdit"

class EditBatch extends Component {

  state = {
    batch: "",
    initialized: false,
    currentUser: "",
    editName: "",
    editType: "",
    editStartDate: "",
    editBottleDate: "",
    editCompleteDate: "",
    editReview: "",
    editRating: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
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
          APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
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

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleFieldChangeRadio = (evt) => {
    let targetValue = evt.target.value
    this.setState({ editType: +targetValue })
  }

  handleFieldChangeRating = (evt) => {
    let targetValue = evt.target.value
    this.setState({ editRating: targetValue })
  }

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
            <BasicEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} />
            {this.state.batch.status === 2
              ? <React.Fragment>
                <BottledEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} {...this.props} />
                 </React.Fragment>
              : this.state.batch.status === 3
                ? <React.Fragment><CompletedEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} handleFieldChangeRating={this.handleFieldChangeRating} {...this.props} />
                  </React.Fragment>
                : null}
            <StarterIngredientEdit batchId={this.state.batch.id} batchType={this.state.batch.typeId} />
            <div className="flex justify-content-center margin-bottom-s">
              <CancelEditBtn batch={this.state.batch} {...this.props} />
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