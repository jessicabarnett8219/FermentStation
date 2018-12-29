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
      <div className="flex flex-column">
        <h3>Sugar</h3>
        <div className="">
          <div>
            <label className="select" htmlFor="currentSugar">
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
          </div>

          <div className="flex align-items-baseline justify-content-space-between">
            <input type="text" className="margin-right-xs ingredient-amount" placeholder="amount" id="sugarAmount" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            } />

            <label className="select flex-1-0-auto" htmlFor="sugarMeasurement">
              <select className="" id="sugarMeasurement" name="sugarMeasurement" onChange={
                (evt) => { this.props.handleIngredientSelection(evt) }
              }><option value="tbsp">tbsp</option>
                <option value="tsp">tsp</option>
                <option value="cups">cups</option>
                <option value="oz">oz</option>
              </select>
            </label>
            <button className="margin-left-xs button info button-border" onClick={() => {
              this.props.handleSaveSugar()
                .then(() => this.props.getAllSugars())
            }}>Add</button>
          </div>
        </div>
        <div>
          <ul>
            {
              this.props.selectedSugars.map(ingredientObj => {
                return <li key={ingredientObj.id} className="no-margin-vertical">
                <div className="flex justify-content-space-between align-items-baseline">
                {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button button-text brand-icon" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllSugars())
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

export default SugarSelection