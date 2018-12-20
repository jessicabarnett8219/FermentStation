import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class SugarSelection extends Component {

  state = {
    sugarOptions: []
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=1")
      .then(options => this.setState({
        sugarOptions: options
      }))
      this.props.getAllSugars()

  }
  render() {
    return (
      <div>
        <h3>Sugar</h3>
        <div className="flex justify-content-flex-start align-items-baseline">
          <label className="select flex-1-1-auto" htmlFor="currentSugar">
            <select className="" id="currentSugar" name="currentSugar" onChange={
              (evt) => {
                this.props.handleIngredientSelection(evt)
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
          </label>

          <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="sugarAmount" onChange={
            (evt) => { this.props.handleIngredientSelection(evt) }
          } />

          <label className="select flex-1-1-auto" htmlFor="sugarMeasurement">
            <select className="" id="sugarMeasurement" name="sugarMeasurement" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            }><option value="tbsp">tbsp</option>
              <option value="tsp">tsp</option>
              <option value="cups">cups</option>
              <option value="oz">oz</option>
            </select>
          </label>
          <button className="flex-0-1-auto" onClick={() => {
            this.props.handleSaveSugar()
              .then(() => this.props.getAllSugars())
          }}>Add</button>
        </div>
        <div>
          <ul>
            {
              this.props.selectedSugars.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllSugars())
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

export default SugarSelection