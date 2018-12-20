import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

class KombuchaStarterSelection extends Component {

  state = {
    kombuchaStarterOptions: [],
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=6")
      .then(options => this.setState({
        kombuchaStarterOptions: options
      }))
      this.props.getAllKombuchaStarters()
  }

  render() {
    return (
      <div>
        <h3>Kombucha Starter</h3>
        <div className="flex justify-content-flex-start align-items-baseline">
          <label className="select flex-1-1-auto" htmlFor="currentKombuchaStarter">
            <select className="" id="currentKombuchaStarter" name="currentKombuchaStarter" onChange={
              (evt) => {
                this.props.handleIngredientSelection(evt)
              }
            }>
              {
                this.state.kombuchaStarterOptions.map(starter => {
                  return <option key={starter.id} value={starter.id} >
                    {starter.name}
                  </option>
                })
              }
            </select>
          </label>
          <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="kombuchaStarterAmount" onChange={
            (evt) => { this.props.handleIngredientSelection(evt) }
          } />
          <label className="select flex-1-1-auto" htmlFor="kombuchaStarterMeasurement">
            <select className="" id="kombuchaStarterMeasurement" name="kombuchaStarterMeasurement" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            }><option value="cups">cups</option>
              <option value="tbsp">tbsp</option>
              <option value="oz">oz</option>
            </select>
          </label>
          <button className="flex-0-1-auto" onClick={() => {
            this.props.handleSaveKombuchaStarter()
              .then(() => this.props.getAllKombuchaStarters())
          }}>Add</button>
        </div>
        <div>
          <ul>
            {
              this.props.selectedKombuchaStarters.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllKombuchaStarters())
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

export default KombuchaStarterSelection