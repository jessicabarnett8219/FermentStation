import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import FlavorSelection from "../ingredient/FlavorSelection";


class FlavorEdit extends Component {

  state = {
    batch: "",
    batchId: "",
    currentFlavor: 6,
    flavorAmount: 0,
    flavorMeasurement: "tbsp",
    selectedFlavors: []
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({ batchId: batchId})
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batch: batch,
        })
      }, () => { this.getAllFlavors() })

  }

  getAllFlavors = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
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
      batchId: this.state.batchId,
      amount: parseInt(this.state.flavorAmount),
      measurement: this.state.flavorMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="container">
          <h1 className="text-align-center">Bottle Ingredients</h1>
          <FlavorSelection handleIngredientSelection={this.handleIngredientSelection} deleteIngredient={this.deleteIngredient} handleSaveFlavor={this.handleSaveFlavor} selectedFlavors={this.state.selectedFlavors} getAllFlavors={this.getAllFlavors} />

          <div className="flex justify-content-center">
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              this.props.history.push(`/batches/edit/${this.state.batch.id}`)
            }}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}
export default FlavorEdit