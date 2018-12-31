import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import FlavorSelection from "../ingredient/FlavorSelection"

class BottleIngredientEdit extends Component {
  state = {
    currentFlavor: 6,
    flavorAmount: 0,
    flavorMeasurement: "cups",
    selectedFlavors: [],
    hideFlavorForm: true,
    hideFlavorButton: false
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  getAllFlavors = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 5)
      })
      .then(flavors => this.setState({ selectedFlavors: flavors }))
  }

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleSaveFlavor = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentFlavor),
      batchId: this.props.batchId,
      amount: parseInt(this.state.flavorAmount),
      measurement: this.state.flavorMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  toggleFlavors = () => {
    const currentStateForm = this.state.hideFlavorForm;
    const currentStateBtn = this.state.hideFlavorButton;
    this.setState({
      hideFlavorForm: !currentStateForm,
      hideFlavorButton: !currentStateBtn
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.hideFlavorButton ? "hideForm" : null}>
          <div className="flex justify-content-flex-start align-items-center">
            <strong><label>Edit Bottle Ingredients</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
              this.toggleFlavors()
            }}><i className="fas fa-angle-down"></i></button>
          </div>
        </div>

        <div className={this.state.hideFlavorForm ? "hideForm" : null}>
          <div className="flex justify-content-flex-start align-items-center">
            <strong><label>Edit Bottle Ingredients</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
              this.toggleFlavors()
            }}><i className="fas fa-angle-up"></i></button>
          </div>
          <FlavorSelection deleteIngredient={this.deleteIngredient} getAllFlavors={this.getAllFlavors} handleIngredientSelection={this.handleIngredientSelection} handleSaveFlavor={this.handleSaveFlavor} selectedFlavors={this.state.selectedFlavors} />
        </div>
      </React.Fragment>
    )
  }
}

export default BottleIngredientEdit