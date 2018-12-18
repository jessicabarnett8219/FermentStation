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
      <div>
        <div className="flex justify-content-flex-start align-items-baseline">
          <label className="select flex-1-1-auto" htmlFor="currentFlavor">
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

          <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="flavorAmount" onChange={
            (evt) => { this.props.handleIngredientSelection(evt) }
          } />

          <label className="select flex-1-1-auto" htmlFor="flavorMeasurement">
            <select className="" id="flavorMeasurement" name="flavorMeasurement" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            }><option value="tbsp">tbsp</option>
              <option value="tsp">tsp</option>
              <option value="cups">cups</option>
              <option value="oz">oz</option>
            </select>
          </label>
          <button className="flex-0-1-auto" onClick={() => {
            this.props.handleSaveFlavor()
              .then(() => this.props.getAllFlavors())
          }}>Add</button>
        </div>
        <div>
          <ul>
            {
              this.props.selectedFlavors.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllFlavors())
                  }}>Delete</button>
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