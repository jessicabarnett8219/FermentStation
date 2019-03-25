import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import SugarSelection from "./SugarSelection";
import WaterSelection from "./WaterSelection";
import SupplementSelection from "./SupplementSelection";
import TeaSelection from "./TeaSelection";

class IngredientForm extends Component {
    // This is the parent component that renders each of the specific ingredient component depending on which type of ferment the batch is. State for the selection form (default selections and current selections) lives here. Contains all the methods for rendering dropdown options and save or delete selections.

  state = {
    batchId: "",
    batchType: "",
    currentSugar: 1,
    currentTea: 3,
    currentWater: 8,
    currentSupplement: 2,
    waterAmount: 0,
    waterMeasurement: "cups",
    supplementAmount: 0,
    supplementMeasurement: "tbsp",
    selectedSugars: [],
    selectedTeas: [],
    selectedWaters: [],
    selectedSupplements: [],
    sugarAmount: 0,
    sugarMeasurement: "tbsp",
    teaAmount: 0,
    teaMeasurement: "tbsp",
    isInitialized: false
  }

  componentDidMount() {
    //   Get the batchId of the current batch from the URL and set that to a variable that can be used to query the database and set that batch as the batch in state
    const { batchId } = this.props.match.params
    APIManager.getEntry("batches", batchId)
      .then(batch => this.setState({
        batchId: batch.id,
        batchType: batch.typeId,
        isInitialized: true
      }))
  }

// Functions to get all of each ingredient in a particular category for dropdown
  getAllSugars = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 1)
      })
      .then(sugars => this.setState({ selectedSugars: sugars }))
  }

  getAllTeas = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 3)
      })
      .then(teas => this.setState({ selectedTeas: teas }))
  }

  getAllWaters = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 7)
      })
      .then(waters => this.setState({ selectedWaters: waters }))
  }

  getAllSupplements = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 2)
      })
      .then(supplements => this.setState({ selectedSupplements: supplements }))
  }

//   Changes the state as a selection is made
  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

// Functions to create an object with the new ingredient and save to the database
  handleSaveSugar = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSugar),
      batchId: this.state.batchId,
      amount: this.state.sugarAmount,
      measurement: this.state.sugarMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveTea = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentTea),
      batchId: this.state.batchId,
      amount: this.state.teaAmount,
      measurement: this.state.teaMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveSupplement = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSupplement),
      batchId: this.state.batchId,
      amount: this.state.supplementAmount,
      measurement: this.state.supplementMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveWater = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentWater),
      batchId: this.state.batchId,
      amount: this.state.waterAmount,
      measurement: this.state.waterMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  handleSaveAll = () => {
    this.props.history.push(`/batches/${this.state.batchId}`)
  }

  render() {
    if (this.state.isInitialized === true) {
      return (
        <React.Fragment>
          <NavBar {...this.props} />
          <div className="container padding-horizontal-m sticky-footer-clear">
            <div className="flex flex-column align-items-center">
              <h1 className="text-align-center no-margin-bottom">Add Ingredients</h1>
              <div className="title-divider margin-bottom-xs"></div>
            </div>
            <div className="padding-horizontal-s padding-vertical-xs no-margin">
              <strong><label className="font-size-l">Water</label></strong>
              <WaterSelection handleIngredientSelection={this.handleIngredientSelection} getAllWaters={this.getAllWaters} handleSaveWater={this.handleSaveWater} deleteIngredient={this.deleteIngredient} selectedWaters={this.state.selectedWaters} />
            </div>

            <div className="padding-horizontal-s padding-vertical-xs no-margin">
              <strong><label className="font-size-l">Sugar</label></strong>
              <SugarSelection handleIngredientSelection={this.handleIngredientSelection} getAllSugars={this.getAllSugars} handleSaveSugar={this.handleSaveSugar} deleteIngredient={this.deleteIngredient} selectedSugars={this.state.selectedSugars} />
            </div>

{/* Render the SupplementSelection if it's type2. Render the TeaSelection if it's type1 */}
            {this.state.batchType === 2 ?
              <div className="padding-horizontal-s padding-vertical-s no-margin">
                <strong><label className="font-size-l">Supplements</label></strong>
                <SupplementSelection handleIngredientSelection={this.handleIngredientSelection} getAllSupplements={this.getAllSupplements} handleSaveSupplement={this.handleSaveSupplement} deleteIngredient={this.deleteIngredient} selectedSupplements={this.state.selectedSupplements} /></div> : this.state.batchType === 1 ?
                <div className="padding-horizontal-s padding-vertical-xs no-margin">
                  <strong><label className="font-size-l">Tea</label></strong>
                  <TeaSelection handleIngredientSelection={this.handleIngredientSelection} getAllTeas={this.getAllTeas} handleSaveTea={this.handleSaveTea} deleteIngredient={this.deleteIngredient} selectedTeas={this.state.selectedTeas} />
                </div> : null
            }
          </div>

          <div className="flex margin-vertical-s margin-horizontal-m">
            <button className="button info button-xxl color-white sticky-button" onClick={() => { this.handleSaveAll() }}>Save</button>
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

export default IngredientForm