import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import IngredientSelection from "./IngredientSelection"

// first set state of batchId based on params. on click of "add" for a particular ingredient selection, push that to the array and set state and print to the DOM, on save of all ingredients create an object for each ingredient paired with the batch id. "

class IngredientForm extends Component {

  state = {
    batchId: "",
    currentIngredient: "",
    allIngredients: []
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({batchId: batchId})
    // fetch the database for all ingredients that match this batch ID and print to the DOM
  }

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange["currentIngredient"] = evt.target.value
    this.setState(stateToChange)
  }

  constructbatchIngredient = () => {
    let batchIngredient = {
      ingredientId: this.state.currentIngredient,
      batchId: this.state.batchId
    }
    return batchIngredient
  }

  handleSaveIngredient = () => {
    let newbatchIngredient = this.constructbatchIngredient()
    APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }


  render() {
    return (
      <div>
        <NavBar {...this.props}/>
        <div className="container">
        <h1 className="text-align-center">Add Ingredients</h1>
        <h3>Sugar</h3>
        <IngredientSelection handleIngredientSelection={this.handleIngredientSelection} constructbatchIngredient={this.constructbatchIngredient} />
        <button onClick={() => {
            this.handleSaveIngredient()
          }}>Add</button>
            <div>
              {/* ingredients output here */}
            </div>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
            }}>Save</button>
          </div>
        </div>
    )
  }
}
export default IngredientForm