import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import SugarSelection from "./SugarSelection"
import TeaSelection from "./TeaSelection"

// TODO break out selected ingredient list into a separate component so that it can be used for all categories. pass category ids to ingredient selection so that it can be used for all categories. Repeat for all categories. Send up conditional rendering based on kombucha vs kefir. deal with save button.

class IngredientForm extends Component {

  state = {
    batchId: "",
    currentSugar: 1,
    currentTea: 3,
    selectedSugars: [],
    selectedTeas: []
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({ batchId: +batchId })
  }

  getAllSugars = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 1)
      })
      .then(sugars => this.setState({selectedSugars: sugars}))
  }

  getAllTeas = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 3)
      })
      .then(teas => this.setState({selectedTeas: teas}))
  }

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = parseInt(evt.target.value)
    this.setState(stateToChange)
  }

  handleSaveSugar = () => {
    let newbatchIngredient = {
      ingredientId: this.state.currentSugar,
      batchId: this.state.batchId
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveTea = () => {
    let newbatchIngredient = {
      ingredientId: this.state.currentTea,
      batchId: this.state.batchId
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
          <h1 className="text-align-center">Add Ingredients</h1>
          <div>
            <h3>Sugar</h3>
            <SugarSelection handleIngredientSelection={this.handleIngredientSelection} />
            <button onClick={() => {
              this.handleSaveSugar()
              .then(() => this.getAllSugars())

            }}>Add</button>
            <div>
              <ul>
                {
                  this.state.selectedSugars.map(ingredientObj => {
                    return <li key={ingredientObj.id}>{ingredientObj.ingredient.name}
                      <button className="button-xs" onClick={() => {
                        this.deleteIngredient(ingredientObj.id)
                        .then(() => this.getAllSugars())
                      }}>Delete</button>
                    </li>
                  })
                }
              </ul>
            </div>

            <div>
              <h3>Tea</h3>
              <TeaSelection handleIngredientSelection={this.handleIngredientSelection} />
              <button onClick={() => {
                this.handleSaveTea()
                .then(() => this.getAllTeas())

              }}>Add</button>
              <div>
                <ul>
                  {
                    this.state.selectedTeas.map(ingredientObj => {
                      return <li key={ingredientObj.id}>{ingredientObj.ingredient.name}
                        <button className="button-xs" onClick={() => {
                          this.deleteIngredient(ingredientObj.id)
                          .then(() => this.getAllTeas())
                        }}>Delete</button>
                      </li>
                    })
                  }
                </ul>
              </div>

            </div>
          </div>
          <button className="button info margin-left-xxs margin-top-xxs">Save</button>
        </div>
      </div>
    )
  }
}

export default IngredientForm