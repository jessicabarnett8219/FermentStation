import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingEdit from "./BrewingEdit"
import BottledEdit from "./BottledEdit";
import CompletedEdit from "./CompletedEdit"
import NavBar from "../../navigation/NavBar"

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
    editRating: "",
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

  getStarterIngredients = (batchId) => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId !== 5)
      })
      .then(ingredients => {
        this.setState({ starterIngredients: ingredients })
      })
  }

  getBottleIngredients = (batchId) => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 5)
      })
      .then(ingredients => {
        this.setState({ bottleIngredients: ingredients })
      })
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  handleSave = () => {
    let editedBatch = this.constructEditedBatch()
    APIManager.editEntry("batches", this.state.batch.id, editedBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batch.id}`)
      })

  }

  render() {
    return this.state.initialized === true ?

      <React.Fragment>
        <NavBar {...this.props} />
        {this.state.batch.status === 1
        ? <BrewingEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} getStarterIngredients={this.getStarterIngredients} deleteIngredient={this.deleteIngredient} {...this.props} />
        : this.state.batch.status === 2
        ? <BottledEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} bottleIngredients={this.state.bottleIngredients}starterIngredients={this.state.starterIngredients} deleteIngredient={this.deleteIngredient} getBottleIngredients={this.getBottleIngredients} getStarterIngredients={this.getStarterIngredients}{...this.props} />
        : this.state.batch.status === 3
        ? <CompletedEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} handleFieldChangeRating={this.handleFieldChangeRating} starterIngredients={this.state.starterIngredients} bottleIngredients={this.state.bottleIngredients} getStarterIngredients={this.getStarterIngredients} getBottleIngredients={this.getBottleIngredients} deleteIngredient={this.deleteIngredient} {...this.props} />
        : null}

      </React.Fragment>
    : null
    // if (this.state.initialized === true) {
    //   if (this.state.batch.status === 1) {
    //     return (
    //       <div>
    //         <NavBar {...this.props} />
    //         <BrewingEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} getStarterIngredients={this.getStarterIngredients} deleteIngredient={this.deleteIngredient} {...this.props} />
    //       </div>
    //     )
    //   } else if (this.state.batch.status === 2) {
    //     return (
    //       <div>
    //         <NavBar {...this.props} />
    //         <BottledEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} bottleIngredients={this.state.bottleIngredients}starterIngredients={this.state.starterIngredients} deleteIngredient={this.deleteIngredient} getBottleIngredients={this.getBottleIngredients} getStarterIngredients={this.getStarterIngredients}{...this.props} />
    //       </div>
    //     )
    //   }
    //   else if (this.state.batch.status === 3) {
    //     return (
    //       <div>
    //         <NavBar {...this.props} />
    //         <CompletedEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} handleFieldChangeRating={this.handleFieldChangeRating} starterIngredients={this.state.starterIngredients} bottleIngredients={this.state.bottleIngredients} getStarterIngredients={this.getStarterIngredients} getBottleIngredients={this.getBottleIngredients} deleteIngredient={this.deleteIngredient} {...this.props} />
    //       </div>
    //     )
    //   }
    // }
    // else {
    //   return (
    //     <div>
    //     </div>
    //   )
    // }

  }





}


export default EditBatch