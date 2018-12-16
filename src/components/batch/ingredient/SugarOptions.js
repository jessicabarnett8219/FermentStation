import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class SugarSelection extends Component {

  state = {
    sugarOptions: [],
    selectedIngredients: [],
    currentSugar: ""
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=1")
      .then(options => this.setState({
        sugarOptions: options
      }))
  }

  handleIngredientSelection = (evt) => {
    this.setState({currentSugar: parseInt(evt.target.value)})
  }

  deleteIngredient = (id) => {
    APIManager.deleteEntry("batches-ingredients", id)
    .then(() => {
      APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => this.setState({selectedSugars: ingredients}))
    })
  }

  render() {
    return (
      <div>
        <div>
          <label className="select" htmlFor="ingredientId">
            <div className="input-group">
              <select name="ingredientId" onChange={
                (evt) => {
                  this.handleIngredientSelection(evt)
                }
              }>
                {
                  this.state.sugarOptions.map(sugar => {
                    return <option key={sugar.id} value={sugar.id} >
                      {sugar.name}
                    </option>
                  })
                }
              </select>
              <button onClick={() => {
                this.props.handleSaveIngredient("currentSugar")
              }}>Add</button>
            </div>
          </label>
        </div>
        <ul>
          {
            this.state.selectedIngredients.map(ingredientObj => {
              return <li key={ingredientObj.id}>
                {ingredientObj.ingredient.name}
                <button className="button-xs" onClick={() => {
                  this.deleteIngredient(ingredientObj.id)
                }}>Delete</button>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default SugarSelection