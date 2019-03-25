import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import SugarSelection from "../ingredient/SugarSelection";
import WaterSelection from "../ingredient/WaterSelection";
import SupplementSelection from "../ingredient/SupplementSelection";
import TeaSelection from "../ingredient/TeaSelection";

class StarterIngredientEdit extends Component {
    // This component contains the state of the input fields for editing the starter  ingredients as well as the methods for deleting an ingredient on a certain batch, loading the existing ingredients on that batch and addding a new ingredients. This component is rendered by the EditBatch component.

  state = {
    currentSugar: 1,
    currentTea: 3,
    currentWater: 8,
    currentSupplement: 2,
    currentStarter: 18,
    waterAmount: 0,
    waterMeasurement: "cups",
    supplementAmount: 0,
    supplementMeasurement: "tbsp",
    selectedSugars: [],
    selectedTeas: [],
    selectedWaters: [],
    selectedSupplements: [],
    sugarAmount: 0,
    sugarMeasurement: "tbsp",
    teaAmount: 0,
    teaMeasurement: "tbsp",
    hideWaterForm: true,
    hideWaterButton: false,
    hideSugarForm: true,
    hideSugarButton: false,
    hideTeaForm: true,
    hideTeaButton: false,
    hideSupplementsForm: true,
    hideSupplementsButton: false
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  toggleWater = () => {
    const currentStateForm = this.state.hideWaterForm;
    const currentStateBtn = this.state.hideWaterButton;
    this.setState({
      hideWaterForm: !currentStateForm,
      hideWaterButton: !currentStateBtn
    });
  }

  toggleSugar = () => {
    const currentStateForm = this.state.hideSugarForm;
    const currentStateBtn = this.state.hideSugarButton;
    this.setState({
      hideSugarForm: !currentStateForm,
      hideSugarButton: !currentStateBtn
    });
  }

  toggleSupplements = () => {
    const currentStateForm = this.state.hideSupplementsForm;
    const currentStateBtn = this.state.hideSupplementsButton;
    this.setState({
      hideSupplementsForm: !currentStateForm,
      hideSupplementsButton: !currentStateBtn
    });
  }

  toggleTea = () => {
    const currentStateForm = this.state.hideTeaForm;
    const currentStateBtn = this.state.hideTeaButton;
    this.setState({
      hideTeaForm: !currentStateForm,
      hideTeaButton: !currentStateBtn
    });
  }

  getAllSugars = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 1)
      })
      .then(sugars => this.setState({ selectedSugars: sugars }))
  }

  getAllTeas = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 3)
      })
      .then(teas => this.setState({ selectedTeas: teas }))
  }

  getAllWaters = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 7)
      })
      .then(waters => this.setState({ selectedWaters: waters }))
  }

  getAllSupplements = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.props.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 2)
      })
      .then(supplements => this.setState({ selectedSupplements: supplements }))
  }

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleSaveSugar = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSugar),
      batchId: this.props.batchId,
      amount: parseInt(this.state.sugarAmount),
      measurement: this.state.sugarMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveTea = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentTea),
      batchId: this.props.batchId,
      amount: parseInt(this.state.teaAmount),
      measurement: this.state.teaMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveSupplement = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSupplement),
      batchId: this.props.batchId,
      amount: parseInt(this.state.supplementAmount),
      measurement: this.state.supplementMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveWater = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentWater),
      batchId: this.props.batchId,
      amount: parseInt(this.state.waterAmount),
      measurement: this.state.waterMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveAll = () => {
    this.props.history.push(`/batches/edit/${this.props.batchId}`)
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.hideWaterButton ? "hideForm" : null}>
          <div className="flex justify-content-space-between align-items-center border-bottom margin-vertical-s">
            <strong><label className="font-size-l">Edit Water</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
              this.toggleWater()
            }}><i className="fas fa-angle-down fa-lg color-info"></i></button>
          </div>
        </div>
        <div className={this.state.hideWaterForm ? "hideForm" : null}>
          <div className="flex justify-content-space-between align-items-center">
            <strong><label className="font-size-l">Edit Water</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
              this.toggleWater()
            }}><i className="fas fa-angle-up fa-lg color-info"></i></button>
          </div>
          <div className="margin-bottom-s padding-bottom-xs border-bottom">
          <WaterSelection handleIngredientSelection={this.handleIngredientSelection} getAllWaters={this.getAllWaters} handleSaveWater={this.handleSaveWater} deleteIngredient={this.deleteIngredient} selectedWaters={this.state.selectedWaters} />
          </div>
        </div>

        <div className={this.state.hideSugarButton ? "hideForm" : null}>
          <div className="flex justify-content-space-between align-items-center border-bottom margin-vertical-s">
            <strong><label className="font-size-l">Edit Sugar</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
              this.toggleSugar()
            }}><i className="fas fa-angle-down fa-lg color-info"></i></button>
          </div>
        </div>

        <div className={this.state.hideSugarForm ? "hideForm" : null}>
          <div className="flex justify-content-space-between align-items-center">
            <strong><label className="font-size-l">Edit Sugar</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
              this.toggleSugar()
            }}><i className="fas fa-angle-up fa-lg color-info"></i></button>
          </div>

          <div className="margin-bottom-s padding-bottom-xs border-bottom">
            <SugarSelection handleIngredientSelection={this.handleIngredientSelection} getAllSugars={this.getAllSugars} handleSaveSugar={this.handleSaveSugar} deleteIngredient={this.deleteIngredient} selectedSugars={this.state.selectedSugars} />
          </div>

        </div>

        {this.props.batchType === 2 ?
          <React.Fragment>
            <div className={this.state.hideSupplementsButton ? "hideForm" : null}>
              <div className="flex justify-content-space-between align-items-center border-bottom margin-vertical-s">
                <strong><label className="font-size-l">Edit Supplements</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
                  this.toggleSupplements()
                }}><i className="fas fa-angle-down fa-lg color-info"></i></button>
              </div>
            </div>
            <div className={this.state.hideSupplementsForm ? "hideForm" : null}>
              <div className="flex justify-content-space-between align-items-center">
                <strong><label className="font-size-l">Edit Supplements</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
                  this.toggleSupplements()
                }}><i className="fas fa-angle-up fa-lg color-info"></i></button>
              </div>
              <div className="margin-bottom-s padding-bottom-xs border-bottom">
                <SupplementSelection handleIngredientSelection={this.handleIngredientSelection} getAllSupplements={this.getAllSupplements} handleSaveSupplement={this.handleSaveSupplement} deleteIngredient={this.deleteIngredient} selectedSupplements={this.state.selectedSupplements} /></div>
                </div>
          </React.Fragment>

          : this.props.batchType === 1 ?
            <React.Fragment>
              <div className={this.state.hideTeaButton ? "hideForm" : null}>
                <div className="flex justify-content-space-between align-items-center border-bottom margin-vertical-s">
                  <strong><label className="font-size-l">Edit Tea</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
                    this.toggleTea()
                  }}><i className="fas fa-angle-down fa-lg color-info"></i></button>
                </div>
              </div>
              <div className={this.state.hideTeaForm ? "hideForm" : null}>
                <div className="flex justify-content-space-between align-items-center">
                  <strong><label className="font-size-l">Edit Tea</label></strong><button className="button button-icon button-text brand-icon" onClick={() => {
                    this.toggleTea()
                  }}><i className="fas fa-angle-up fa-lg color-info"></i></button>
                </div>
                <div className="margin-bottom-s padding-bottom-xs border-bottom">
                <TeaSelection handleIngredientSelection={this.handleIngredientSelection} getAllTeas={this.getAllTeas} handleSaveTea={this.handleSaveTea} deleteIngredient={this.deleteIngredient} selectedTeas={this.state.selectedTeas} />
                </div>
                </div>
            </React.Fragment> : null
        }
      </React.Fragment>
    )
  }
}

export default StarterIngredientEdit