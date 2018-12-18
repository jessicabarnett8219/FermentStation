import React, { Component } from "react"
// import APIManager from "../../../modules/APIManager"
import SugarSelection from "./SugarSelection"
import TeaSelection from "./TeaSelection"
import WaterSelection from "./WaterSelection"
import StarterSelection from "./StarterSelection"

class KombuchaIngredientForm extends Component {

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
            <h3>Tea</h3>
            <TeaSelection handleIngredientSelection={this.props.handleIngredientSelection} handleSaveTea={this.props.handleSaveTea} getAllTeas={this.props.getAllTeas} selectedTeas={this.props.selectedTeas} deleteIngredient={this.props.deleteIngredient} />
          </div>
          <div>
            <h3>Starter</h3>
            <StarterSelection handleIngredientSelection={this.props.handleIngredientSelection} handleSaveStarter={this.props.handleSaveStarter} getAllStarters={this.props.getAllStarters} selectedStarters={this.props.selectedStarters} deleteIngredient={this.props.deleteIngredient}/>
          </div>
        </div>
    )
  }
}

export default KombuchaIngredientForm