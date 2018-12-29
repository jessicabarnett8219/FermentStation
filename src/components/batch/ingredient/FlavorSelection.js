import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

class FlavorSelection extends Component {

  state = {
    flavorOptions: []
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=5")
      .then(options => this.setState({
        flavorOptions: options
      }))
    this.props.getAllFlavors()
  }

  render() {
    return (
      <div className="">
      <strong><label htmlFor="bottleIngredients" className="">Bottle Ingredients</label></strong>
        <div className="flex flex-column align-items-center margin-vertical-xs">
          <label className="select ingredient-select" htmlFor="currentFlavor">
            <select className="" id="currentFlavor" name="currentFlavor" onChange={
              (evt) => {
                this.props.handleIngredientSelection(evt)
              }
            }>
              {
                this.state.flavorOptions.map(flavor => {
                  return <option key={flavor.id} value={flavor.id} >
                    {flavor.name}
                  </option>
                })
              }
            </select>
          </label>

          <div className="flex align-items-baseline justify-content-space-between">
            <input type="text" className="margin-right-xs ingredient-amount" placeholder="amount" id="flavorAmount" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            } />

            <label className="select flex-1-0-auto" htmlFor="flavorMeasurement">
              <select className="no-margin" id="flavorMeasurement" name="flavorMeasurement" onChange={
                (evt) => { this.props.handleIngredientSelection(evt) }
              }><option value="tbsp">tbsp</option>
                <option value="tsp">tsp</option>
                <option value="cups">cups</option>
                <option value="oz">oz</option>
              </select>
            </label>
            <button className="margin-left-xs button info button-border" onClick={() => {
              this.props.handleSaveFlavor()
                .then(() => this.props.getAllFlavors())
            }}>Add</button>
          </div>
        </div>

        <div>
          <ul>
            {
              this.props.selectedFlavors.map(ingredientObj => {
                return <li key={ingredientObj.id} className="no-margin-vertical">
                <div className="flex justify-content-space-between align-items-center">
                {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button button-text brand-icon" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllFlavors())
                  }}><i className="fas fa-trash"></i></button>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default FlavorSelection