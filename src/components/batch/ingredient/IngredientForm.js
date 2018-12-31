import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import SugarSelection from "./SugarSelection";
import WaterSelection from "./WaterSelection";
import SupplementSelection from "./SupplementSelection";
import TeaSelection from "./TeaSelection";

class IngredientForm extends Component {

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
    const { batchId } = this.props.match.params
    APIManager.getEntry("batches", batchId)
      .then(batch => this.setState({
        batchId: batch.id,
        batchType: batch.typeId,
        isInitialized: true
      }))
  }

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

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleSaveSugar = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSugar),
      batchId: this.state.batchId,
      amount: parseInt(this.state.sugarAmount),
      measurement: this.state.sugarMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveTea = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentTea),
      batchId: this.state.batchId,
      amount: parseInt(this.state.teaAmount),
      measurement: this.state.teaMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveSupplement = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSupplement),
      batchId: this.state.batchId,
      amount: parseInt(this.state.supplementAmount),
      measurement: this.state.supplementMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveWater = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentWater),
      batchId: this.state.batchId,
      amount: parseInt(this.state.waterAmount),
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
            <h1 className="text-align-center">Add Ingredients</h1>
            <div className="border border radius box-shadow-s padding-horizontal-s padding-vertical-xs margin-bottom-s">
              <strong><label className="font-size-l">Water</label></strong>
              <WaterSelection handleIngredientSelection={this.handleIngredientSelection} getAllWaters={this.getAllWaters} handleSaveWater={this.handleSaveWater} deleteIngredient={this.deleteIngredient} selectedWaters={this.state.selectedWaters} />
            </div>

            <div className="border border radius box-shadow-s padding-horizontal-s padding-vertical-xs margin-bottom-s">
              <strong><label className="font-size-l">Sugar</label></strong>
              <SugarSelection handleIngredientSelection={this.handleIngredientSelection} getAllSugars={this.getAllSugars} handleSaveSugar={this.handleSaveSugar} deleteIngredient={this.deleteIngredient} selectedSugars={this.state.selectedSugars} />
            </div>

            {this.state.batchType === 2 ?
              <div className="border border radius box-shadow-s padding-horizontal-s padding-vertical-xs margin-bottom-s">
                <strong><label className="font-size-l">Supplements</label></strong>
                <SupplementSelection handleIngredientSelection={this.handleIngredientSelection} getAllSupplements={this.getAllSupplements} handleSaveSupplement={this.handleSaveSupplement} deleteIngredient={this.deleteIngredient} selectedSupplements={this.state.selectedSupplements} /></div> : this.state.batchType === 1 ?
                <div className="border border radius box-shadow-s padding-horizontal-s padding-vertical-xs margin-bottom-s">
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