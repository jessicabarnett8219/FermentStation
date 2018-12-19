import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class StarterSelection extends Component {

  state = {
    starterOptions: [],
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=6")
      .then(options => this.setState({
        starterOptions: options
      }))
      this.props.getAllStarters()
  }

  render() {
    return (
      <div>
        <h3>Starter</h3>
        <div className="flex justify-content-flex-start align-items-baseline">
          <label className="select flex-1-1-auto" htmlFor="currentStarter">
            <select className="" id="currentStarter" name="currentStarter" onChange={
              (evt) => {
                this.props.handleIngredientSelection(evt)
              }
            }>
              {
                this.state.starterOptions.map(starter => {
                  return <option key={starter.id} value={starter.id} >
                    {starter.name}
                  </option>
                })
              }
            </select>
          </label>
          <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="starterAmount" onChange={
            (evt) => { this.props.handleIngredientSelection(evt) }
          } />
          <label className="select flex-1-1-auto" htmlFor="starterMeasurement">
            <select className="" id="starterMeasurement" name="starterMeasurement" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            }><option value="cups">cups</option>
              <option value="tbsp">tbsp</option>
              <option value="oz">oz</option>
            </select>
          </label>
          <button className="flex-0-1-auto" onClick={() => {
            this.props.handleSaveStarter()
              .then(() => this.props.getAllStarters())
          }}>Add</button>
        </div>
        <div>
          <ul>
            {
              this.props.selectedStarters.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllStarters())
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

export default StarterSelection