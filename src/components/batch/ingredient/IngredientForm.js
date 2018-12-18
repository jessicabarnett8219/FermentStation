import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import SugarSelection from "./SugarSelection"
import TeaSelection from "./TeaSelection"
import SupplementSelection from "./SupplementSelection"
import WaterSelection from "./WaterSelection"

class IngredientForm extends Component {

  state = {
    batchId: "",
    currentSugar: 1,
    currentTea: 3,
    currentWater: 8,
    currentSupplement: 2,
    waterAmount: 0,
    waterMeasurement: "cups",
    supplementAmount: 0,
    supplementMeasurement: "cups",
    selectedSugars: [],
    selectedTeas: [],
    selectedWaters: [],
    selectedSupplements: [],
    sugarAmount: 0,
    sugarMeasurement: "cups",
    teaAmount: 0,
    teaMeasurement: "cups"
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({ batchId: +batchId })
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

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  handleSaveAll = () => {
    this.props.history.push(`/batches/${this.state.batchId}`)
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="container">
          <h1 className="text-align-center">Add Ingredients</h1>
          <div>
            <h3>Water</h3>
            <WaterSelection handleIngredientSelection={this.handleIngredientSelection} handleSaveWater={this.handleSaveWater} getAllWaters={this.getAllWaters}/>
            <div>
              <ul>
                {
                  this.state.selectedWaters.map(ingredientObj => {
                    return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                      <button className="button-xs" onClick={() => {
                        this.deleteIngredient(ingredientObj.id)
                          .then(() => this.getAllWaters())
                      }}>Delete</button>
                    </li>
                  })
                }
              </ul>
            </div>

          </div>
          <div>
            <h3>Sugar</h3>
            <SugarSelection handleIngredientSelection={this.handleIngredientSelection} handleSaveSugar={this.handleSaveSugar} getAllSugars={this.getAllSugars} />
            <div>
              <ul>
                {
                  this.state.selectedSugars.map(ingredientObj => {
                    return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                      <button className="button-xs" onClick={() => {
                        this.deleteIngredient(ingredientObj.id)
                          .then(() => this.getAllSugars())
                      }}>Delete</button>
                    </li>
                  })
                }
              </ul>
            </div>

            <div>
              <h3>Tea</h3>
              <TeaSelection handleIngredientSelection={this.handleIngredientSelection} handleSaveTea={this.handleSaveTea} getAllTeas={this.getAllTeas} />
              <div>
                <ul>
                  {
                    this.state.selectedTeas.map(ingredientObj => {
                      return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                        <button className="button-xs" onClick={() => {
                          this.deleteIngredient(ingredientObj.id)
                            .then(() => this.getAllTeas())
                        }}>Delete</button>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div>
                <h3>Supplements</h3>
                <SupplementSelection handleIngredientSelection={this.handleIngredientSelection} handleSaveSupplement={this.handleSaveSupplement} getAllSupplements={this.getAllSupplements}/>
                <div>
                  <ul>
                    {
                      this.state.selectedSupplements.map(ingredientObj => {
                        return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                          <button className="button-xs" onClick={() => {
                            this.deleteIngredient(ingredientObj.id)
                              .then(() => this.getAllSupplements())
                          }}>Delete</button>
                        </li>
                      })
                    }
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
            this.handleSaveAll()
          }}>Save</button>
        </div>
      </div>
    )
  }
}

export default IngredientForm