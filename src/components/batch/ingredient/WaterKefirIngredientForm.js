import React, { Component } from "react"
// import APIManager from "../../../modules/APIManager"
import SugarSelection from "./SugarSelection"
import WaterSelection from "./WaterSelection"
import SupplementSelection from "./SupplementSelection"

class WaterKefirIngredientForm extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">Add Ingredients</h1>
        <div>
          <h3>Water</h3>
          <WaterSelection handleIngredientSelection={this.props.handleIngredientSelection} handleSaveWater={this.props.handleSaveWater} getAllWaters={this.props.getAllWaters} selectedWaters={this.props.selectedWaters} deleteIngredient={this.props.deleteIngredient} />
        </div>

        <div>
          <h3>Sugar</h3>
          <SugarSelection handleIngredientSelection={this.props.handleIngredientSelection} handleSaveSugar={this.props.handleSaveSugar} getAllSugars={this.props.getAllSugars} selectedSugars={this.props.selectedSugars} deleteIngredient={this.props.deleteIngredient} />
        </div>

        <div>
          <h3>Supplements</h3>
          <SupplementSelection handleIngredientSelection={this.props.handleIngredientSelection} handleSaveSupplement={this.props.handleSaveSupplement} getAllSupplements={this.props.getAllSupplements} selectedSupplements={this.props.selectedSupplements} deleteIngredient={this.props.deleteIngredient} />
        </div>
      </div>
    )
  }
}

export default WaterKefirIngredientForm