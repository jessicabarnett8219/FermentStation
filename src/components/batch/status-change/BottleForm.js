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
      <React.Fragment>
        <NavBar {...this.props} />
        <div className="container padding-horizontal-m sticky-footer-clear">
          <h1 className="text-align-center no-margin-bottom">Bottle Batch</h1>
          <h3 className="text-align-center margin-top-xs no-margin-bottom">{this.state.batch.name}</h3>
          <p className="text-align-center no-margin-top">Started: <Moment format="MMM DD, YYYY">{this.state.batch.startDate}</Moment></p>
          <strong><label htmlFor="bottleDate">Bottle Date</label></strong>
          <input type="date" id="bottleDate" className="margin-bottom-s margin-top-xs" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />

          <strong><label htmlFor="completeDate">Expected Completion Date</label></strong>
          <input type="date" id="completeDate" className="margin-bottom-s margin-top-xs" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />


          <strong><label htmlFor="bottleIngredients" className="">Bottle Ingredients</label></strong>
          <FlavorSelection className="" handleIngredientSelection={this.handleIngredientSelection} deleteIngredient={this.deleteIngredient} handleSaveFlavor={this.handleSaveFlavor} selectedFlavors={this.state.selectedFlavors} getAllFlavors={this.getAllFlavors} />



        </div>
        <div className="flex margin-vertical-s margin-horizontal-m">
          <button className="button info button-xxl color-white sticky-button" onClick={() => {
            this.handleSave()
          }}>Save</button>
        </div>
      </React.Fragment>
    )
  }
}

export default BottleForm