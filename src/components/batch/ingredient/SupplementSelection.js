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

  }


  render() {
    return (
      <div className="flex justify-content-flex-start align-items-baseline">
        <label className="select flex-1-1-auto" htmlFor="currentTea">
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
        <input type="text" className="no-margin max-width-xxs flex-0-1-auto" placeholder="amount" id="supplementAmount" onChange={
          (evt) => { this.props.handleIngredientSelection(evt) }
        } />

        <label className="select flex-1-1-auto" htmlFor="supplementMeasurement">
          <select className="" id="supplementMeasurement" name="supplementMeasurement" onChange={
            (evt) => { this.props.handleIngredientSelection(evt) }
          }><option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
            <option value="oz">oz</option>
            <option value="">N/A</option>
          </select>
        </label>
        <button className="flex-0-1-auto" onClick={() => {
          this.props.handleSaveSupplement()
            .then(() => this.props.getAllSupplements())

        }}>Add</button>
      </div>

    )
  }
}

export default SupplementSelection