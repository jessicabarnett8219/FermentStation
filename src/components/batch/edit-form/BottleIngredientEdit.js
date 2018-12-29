import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import FlavorSelection from "../ingredient/FlavorSelection"

class BottleIngredientEdit extends Component {
  state = {
    currentFlavor: 6,
    flavorAmount: 0,
    flavorMeasurement: "cups",
    selectedFlavors: [],
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  getAllFlavors = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 5)
      })
      .then(flavors => this.setState({ selectedFlavors: flavors }))
  }

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleSaveFlavor = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentFlavor),
      batchId: this.props.batchId,
      amount: parseInt(this.state.flavorAmount),
      measurement: this.state.flavorMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  render() {
      return (
        <React.Fragment>
            <FlavorSelection deleteIngredient={this.deleteIngredient} getAllFlavors={this.getAllFlavors} handleIngredientSelection={this.handleIngredientSelection} handleSaveFlavor={this.handleSaveFlavor} selectedFlavors={this.state.selectedFlavors}/>
        </React.Fragment>
      )
  }
}

export default BottleIngredientEdit