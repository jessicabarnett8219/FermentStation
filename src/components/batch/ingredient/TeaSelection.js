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
      <div>
        <h3>Tea</h3>
        <div className="flex justify-content-flex-start align-items-baseline">
          <label className="select flex-1-1-auto" htmlFor="currentTea">
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
          <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="teaAmount" onChange={
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
          <button className="flex-0-1-auto" onClick={() => {
            this.props.handleSaveTea()
              .then(() => this.props.getAllTeas())
          }}>Add</button>
        </div>
        <div>
          <ul>
            {
              this.props.selectedTeas.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                  <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getAllTeas())
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

export default TeaSelection