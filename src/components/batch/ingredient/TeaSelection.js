import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

class TeaSelection extends Component {

  state = {
    teaOptions: [],
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=3")
      .then(options => this.setState({
        teaOptions: options
      }))
    this.props.getAllTeas()
  }

  render() {
    return (
      <div className="flex flex-column margin-bottom-s">
        <div>
          <div className="">
            <strong><label>Tea</label></strong>
            <label className="select" htmlFor="currentTea">
              <select className="" id="currentTea" name="currentTea" onChange={
                (evt) => {
                  this.props.handleIngredientSelection(evt)
                }
              }>
                {
                  this.state.teaOptions.map(tea => {
                    return <option key={tea.id} value={tea.id} >
                      {tea.name}
                    </option>
                  })
                }
              </select>
            </label>
          </div>

          <div className="flex align-items-baseline justify-content-space-between">
            <input type="text" className="margin-right-xs ingredient-amount" placeholder="amount" id="teaAmount" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            } />
            <label className="select flex-1-1-auto" htmlFor="teaMeasurement">
              <select className="" id="teaMeasurement" name="teaMeasurement" onChange={
                (evt) => { this.props.handleIngredientSelection(evt) }
              }><option value="tbsp">tbsp</option>
                <option value="tsp">tsp</option>
                <option value="cups">cups</option>
                <option value="oz">oz</option>
              </select>
            </label>
            <button className="margin-left-xs button info button-border" onClick={() => {
              this.props.handleSaveTea()
                .then(() => this.props.getAllTeas())
            }}>Add</button>
          </div>
        </div>

        <div>
          <ul>
            {
              this.props.selectedTeas.map(ingredientObj => {
                return <li key={ingredientObj.id} className="no-margin-vertical">
                <div className="flex justify-content-space-between align-items-baseline">
                {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button button-text brand-icon" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllTeas())
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

export default TeaSelection