import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

class WaterSelection extends Component {

  state = {
    waterOptions: [],
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=7")
      .then(options => this.setState({
        waterOptions: options
      }))
    this.props.getAllWaters()
  }

  render() {
    return (
      <div className="flex flex-column margin-top-xs">
        <div className="">
          <div>
            <label className="select" htmlFor="currentWater">
              <select className="" id="currentWater" name="currentWater" onChange={
                (evt) => {
                  this.props.handleIngredientSelection(evt)
                }
              }>
                {
                  this.state.waterOptions.map(water => {
                    return <option key={water.id} value={water.id} >
                      {water.name}
                    </option>
                  })
                }
              </select>
            </label>
          </div>

          <div className="flex align-items-baseline justify-content-space-between">
            <input type="text" className="margin-right-xs ingredient-amount" placeholder="amount" id="waterAmount" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            } />
            <label className="select flex-1-0-auto" htmlFor="waterMeasurement">
              <select className="no-margin" id="waterMeasurement" name="waterMeasurement" onChange={
                (evt) => { this.props.handleIngredientSelection(evt) }
              }>
                <option value="cups">cups</option>
                <option value="oz">oz</option>
              </select>
            </label>
            <button className="margin-left-xs button info button-border" onClick={() => {
              this.props.handleSaveWater()
                .then(() => this.props.getAllWaters())

            }}>Add</button>
          </div>
        </div>

        <div>
          <ul className="no-bullets">
            {
              this.props.selectedWaters.map(ingredientObj => {
                return <li key={ingredientObj.id} className="no-margin">
                <div className="flex justify-content-space-between align-items-baseline">
                {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button button-text brand-icon" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllWaters())
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

export default WaterSelection