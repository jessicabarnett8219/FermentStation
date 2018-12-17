import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import SugarSelection from "./SugarSelection"

// TODO break out selected ingredient list into a separate component so that it can be used for all categories. pass category ids to ingredient selection so that it can be used for all categories. Repeat for all categories. Send up conditional rendering based on kombucha vs kefir. deal with save button.

class IngredientForm extends Component {

  state = {
    batchId: "",
    currentIngredient: 1,
    allIngredients: [],
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({batchId: +batchId})
  }

  getAllIngredients = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
    .then(ingredients => this.setState({allIngredients: ingredients}))
  }

  handleIngredientSelection = (evt) => {
    this.setState({currentIngredient: parseInt(evt.target.value)})
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
    .then(() => this.getAllIngredients())
  }

  deleteIngredient = (id) => {
    APIManager.deleteEntry("batches-ingredients", id)
    .then(() => this.getAllIngredients())
  }

  render() {
      return (
        <div>
          <NavBar {...this.props}/>
          <div className="container">
          <h1 className="text-align-center">Add Ingredients</h1>
          <h3>Sugar</h3>
          <SugarSelection handleIngredientSelection={this.handleIngredientSelection} />
          <button onClick={() => {
              this.handleSaveIngredient()
            }}>Add</button>
              <div>
                <ul>
                {
                  this.state.allIngredients.map(ingredientObj => {
                    return <li key={ingredientObj.id}>{ingredientObj.ingredient.name}
                    <button className="button-xs" onClick={() => {
                      this.deleteIngredient(ingredientObj.id)
                    }}>Delete</button>
                    </li>
                  })
                }
                </ul>
              </div>
              <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              }}>Save</button>
            </div>
          </div>
      )


  }
}
export default IngredientForm