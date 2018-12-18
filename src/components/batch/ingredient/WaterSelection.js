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

  }

  render() {
    return (
      <div>
        <div className="flex justify-content-flex-start align-items-baseline">
          <label className="select flex-1-1-auto" htmlFor="currentWater">
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
          <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="waterAmount" onChange={
            (evt) => { this.props.handleIngredientSelection(evt) }
          } />

          <label className="select flex-1-1-auto" htmlFor="waterMeasurement">
            <select className="" id="waterMeasurement" name="waterMeasurement" onChange={
              (evt) => { this.props.handleIngredientSelection(evt) }
            }>
              <option value="cups">cups</option>
              <option value="oz">oz</option>
            </select>
          </label>
          <button className="flex-0-1-auto" onClick={() => {
            this.props.handleSaveWater()
              .then(() => this.props.getAllWaters())

          }}>Add</button>
        </div>
        <div>
          <ul>
            {
              this.props.selectedWaters.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllWaters())
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

export default WaterSelection