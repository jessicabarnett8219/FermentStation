import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

class SupplementSelection extends Component {

  state = {
    supplementOptions: [],
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=2")
      .then(options => this.setState({
        supplementOptions: options
      }))
    this.props.getAllSupplements()
  }

  render() {
    return (
      <div className="flex flex-column">
        <h3>Supplements</h3>
        <div>
          <div className="">
            <label className="select" htmlFor="currentTea">
              <select className="" id="currentSupplement" name="currentSupplement" onChange={
                (evt) => {
                  this.props.handleIngredientSelection(evt)
                }
              }>
                {
                  this.state.supplementOptions.map(supplement => {
                    return <option key={supplement.id} value={supplement.id} >
                      {supplement.name}
                    </option>
                  })
                }
              </select>
            </label>
          </div>

          <div className="flex align-items-baseline justify-content-space-between">
            <input type="text" className="margin-right-xs ingredient-amount" placeholder="amount" id="supplementAmount" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            } />
            <label className="select flex-1-0-auto" htmlFor="supplementMeasurement">
              <select className="no-margin" id="supplementMeasurement" name="supplementMeasurement" onChange={
                (evt) => { this.props.handleIngredientSelection(evt) }
              }><option value="tbsp">tbsp</option>
                <option value="tsp">tsp</option>
                <option value="oz">oz</option>
                <option value="">N/A</option>
              </select>
            </label>
            <button className="margin-left-xs button info button-border" onClick={() => {
              this.props.handleSaveSupplement()
                .then(() => this.props.getAllSupplements())
            }}>Add</button>
          </div>
        </div>

        <div>
          <ul>
            {
              this.props.selectedSupplements.map(ingredientObj => {
                return <li key={ingredientObj.id} className="no-margin-vertical">
                <div className="flex justify-content-space-between align-items-baseline">
                {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button button-text brand-icon" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllSupplements())
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

export default SupplementSelection