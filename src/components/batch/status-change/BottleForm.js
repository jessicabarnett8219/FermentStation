import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import Moment from "react-moment"
import moment from "moment"
import FlavorSelection from "../ingredient/FlavorSelection";

class BottleForm extends Component {

  state = {
    batch: "",
    bottleDate: "",
    completeDate: "",
    batchId: "",
    currentFlavor: 6,
    flavorAmount: 0,
    flavorMeasurement: "tbsp",
    selectedFlavors: []
  }

  componentDidMount() {
    const getToday = () => {
      let today = new Date()
      return moment(today, "YYYY-MM-DD")
    }
    let today = getToday()
    const { batchId } = this.props.match.params
    this.setState({ batchId: batchId, bottleDate: today })
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batch: batch,
          bottleDate: today,
          completeDate: today
        })
      })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructBottledBatch = (evt) => {
    const bottledBatch = {
      bottleDate: this.state.bottleDate,
      completeDate: this.state.completeDate,
      status: 2
    }
    return bottledBatch
  }

  handleSave = () => {
    let bottledBatch = this.constructBottledBatch()
    APIManager.editEntry("batches", this.state.batchId, bottledBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batchId}`)
      })
  }

  getAllFlavors = () => {
    APIManager.getAllEntries("batches-ingredients", `?batchId=${this.state.batchId}&_expand=ingredient`)
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
      batchId: this.state.batchId,
      amount: parseInt(this.state.flavorAmount),
      measurement: this.state.flavorMeasurement
    }
    return APIManager.addEntry("batches-ingredients", newbatchIngredient)
  }

  deleteIngredient = (id) => {
    return APIManager.deleteEntry("batches-ingredients", id)
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="container">
          <h1 className="text-align-center">Bottle Batch</h1>
          <h3 className="text-align-center">{this.state.batch.name}</h3>
          <h4 className="text-align-center">Started On: <Moment format="dddd, MMMM Do YYYY">{this.state.batch.startDate}</Moment></h4>
          <label htmlFor="bottleDate">Bottle Date</label>
          <input type="date" id="bottleDate" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />
          <label htmlFor="completeDate">Expected Completion Date</label>
          <input type="date" id="completeDate" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />
          <label htmlFor="bottleIngredients">Bottle Ingredients</label>
          <FlavorSelection handleIngredientSelection={this.handleIngredientSelection} deleteIngredient={this.deleteIngredient} handleSaveFlavor={this.handleSaveFlavor} selectedFlavors={this.state.selectedFlavors} getAllFlavors={this.getAllFlavors}/>

          <div className="flex justify-content-center">
            <button className="button info button-border margin-top-xxs" onClick={
              () => {
                this.props.history.push(`/batches/${this.state.batchId}`)
              }
            }>Cancel</button>

            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              this.handleSave()
            }}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BottleForm