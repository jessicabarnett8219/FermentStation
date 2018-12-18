import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import KombuchaIngredientForm from "./KombuchaIngredientForm";
import WaterKefirIngredientForm from "./WaterKefirIngredientForm"

class IngredientForm extends Component {

  state = {
    batchId: "",
    batchType: "",
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
    selectedStarters: [],
    sugarAmount: 0,
    sugarMeasurement: "tbsp",
    teaAmount: 0,
    teaMeasurement: "tbsp",
    selectedStarter: 7,
    starterAmount: 0,
    starterMeasurement: "cups",
    isInitialized: false
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    APIManager.getEntry("batches", batchId)
      .then(batch => this.setState({
        batchId: batch.id,
        batchType: batch.typeId,
        isInitialized: true
      }))
  }

  getAllSugars = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 1)
      })
      .then(sugars => this.setState({ selectedSugars: sugars }))
  }

  getAllTeas = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 3)
      })
      .then(teas => this.setState({ selectedTeas: teas }))
  }

  getAllWaters = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 7)
      })
      .then(waters => this.setState({ selectedWaters: waters }))
  }

  getAllSupplements = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 2)
      })
      .then(supplements => this.setState({ selectedSupplements: supplements }))
  }

  getAllStarters = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 6)
      })
      .then(starters => this.setState({ selectedStarters: starters }))
  }

  handleIngredientSelection = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleSaveSugar = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSugar),
      batchId: this.state.batchId,
      amount: parseInt(this.state.sugarAmount),
      measurement: this.state.sugarMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveTea = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentTea),
      batchId: this.state.batchId,
      amount: parseInt(this.state.teaAmount),
      measurement: this.state.teaMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveSupplement = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentSupplement),
      batchId: this.state.batchId,
      amount: parseInt(this.state.supplementAmount),
      measurement: this.state.supplementMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveWater = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentWater),
      batchId: this.state.batchId,
      amount: parseInt(this.state.waterAmount),
      measurement: this.state.waterMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  handleSaveStarter = () => {
    let newbatchIngredient = {
      ingredientId: parseInt(this.state.currentStarter),
      batchId: this.state.batchId,
      amount: parseInt(this.state.starterAmount),
      measurement: this.state.starterMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  handleSaveAll = () => {
    this.props.history.push(`/batches/${this.state.batchId}`)
  }

  render() {
    if (this.state.isInitialized === true) {
      if (this.state.batchType === 1) {
        return (
          <div>
            <NavBar {...this.props} />
            <div className="container">
              <KombuchaIngredientForm handleIngredientSelection={this.handleIngredientSelection} deleteIngredient={this.deleteIngredient} handleSaveWater={this.handleSaveWater} getAllWaters={this.getAllWaters} selectedWaters={this.state.selectedWaters} handleSaveSugar={this.handleSaveSugar} getAllSugars={this.getAllSugars} selectedSugars={this.state.selectedSugars} handleSaveTea={this.handleSaveTea} getAllTeas={this.getAllTeas} selectedTeas={this.state.selectedTeas} handleSaveStarter={this.handleSaveStarter} getAllStarters={this.getAllStarters} selectedStarters={this.state.selectedStarters} />

              <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
                this.handleSaveAll()
              }}>Save</button>
            </div>
          </div>
        )
      } else if (this.state.batchType === 2) {
        return (
          <div>
            <NavBar {...this.props} />
            <div className="container">
              <WaterKefirIngredientForm handleIngredientSelection={this.handleIngredientSelection} deleteIngredient={this.deleteIngredient} handleSaveWater={this.handleSaveWater} getAllWaters={this.getAllWaters} selectedWaters={this.state.selectedWaters} handleSaveSugar={this.handleSaveSugar} getAllSugars={this.getAllSugars} selectedSugars={this.state.selectedSugars} handleSaveSupplement={this.handleSaveSupplement} getAllSupplements={this.getAllSupplements} selectedSupplements={this.state.selectedSupplements} />
            </div>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              this.handleSaveAll()
            }}>Save</button>
          </div>
        )
      }
    } else {
      return (
        <div>loading</div>
      )
    }


  }
}

export default IngredientForm