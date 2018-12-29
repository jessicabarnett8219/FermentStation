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
      <div className="flex flex-column margin-bottom-s">
        <div>
          <div className="">
            <strong><label>Kombucha Starter</label></strong>
            <label className="select" htmlFor="currentKombuchaStarter">
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
          </div>

          <div className="flex align-items-baseline justify-content-space-between">
            <input type="text" className="margin-right-xs ingredient-amount" placeholder="amount" id="kombuchaStarterAmount" onChange={
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
            <button className="margin-left-xs button info button-border" onClick={() => {
              this.props.handleSaveKombuchaStarter()
                .then(() => this.props.getAllKombuchaStarters())
            }}>Add</button>
          </div>
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