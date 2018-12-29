import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import SugarSelection from "../ingredient/SugarSelection";
import WaterSelection from "../ingredient/WaterSelection";
import SupplementSelection from "../ingredient/SupplementSelection";
import TeaSelection from "../ingredient/TeaSelection";

class StarterIngredientEdit extends Component {
  state = {
    currentSugar: 1,
    currentTea: 3,
    currentWater: 8,
    currentSupplement: 2,
    currentStarter: 18,
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
    teaMeasurement: "tbsp"
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  getAllSugars = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 1)
      })
      .then(sugars => this.setState({ selectedSugars: sugars }))
  }

  getAllTeas = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 3)
      })
      .then(teas => this.setState({ selectedTeas: teas }))
  }

  getAllWaters = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 7)
      })
      .then(waters => this.setState({ selectedWaters: waters }))
  }

  getAllSupplements = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
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
      batchId: this.props.batchId,
      amount: parseInt(this.state.sugarAmount),
      measurement: this.state.sugarMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveTea = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentTea),
      batchId: this.props.batchId,
      amount: parseInt(this.state.teaAmount),
      measurement: this.state.teaMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveSupplement = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSupplement),
      batchId: this.props.batchId,
      amount: parseInt(this.state.supplementAmount),
      measurement: this.state.supplementMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveWater = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentWater),
      batchId: this.props.batchId,
      amount: parseInt(this.state.waterAmount),
      measurement: this.state.waterMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveAll = () => {
    this.props.history.push(`/batches/edit/${this.props.batchId}`)
  }

  render() {
      return (
        <React.Fragment>
            <label>Starter Ingredients</label>
            <WaterSelection handleIngredientSelection={this.handleIngredientSelection} getAllWaters={this.getAllWaters} handleSaveWater={this.handleSaveWater} deleteIngredient={this.deleteIngredient} selectedWaters={this.state.selectedWaters} />
            <SugarSelection handleIngredientSelection={this.handleIngredientSelection} getAllSugars={this.getAllSugars} handleSaveSugar={this.handleSaveSugar} deleteIngredient={this.deleteIngredient} selectedSugars={this.state.selectedSugars} />

            {this.props.batchType === 2 ?
              <SupplementSelection handleIngredientSelection={this.handleIngredientSelection} getAllSupplements={this.getAllSupplements} handleSaveSupplement={this.handleSaveSupplement} deleteIngredient={this.deleteIngredient} selectedSupplements={this.state.selectedSupplements} /> : this.props.batchType === 1 ?
                <React.Fragment>
                  <TeaSelection handleIngredientSelection={this.handleIngredientSelection} getAllTeas={this.getAllTeas} handleSaveTea={this.handleSaveTea} deleteIngredient={this.deleteIngredient} selectedTeas={this.state.selectedTeas} />
                </React.Fragment> : null
            }
        </React.Fragment>
      )
  }
}

export default StarterIngredientEdit