import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingDetail from "./BrewingDetail"
import BottledDetail from "./BottledDetail";
import CompletedDetail from "./CompletedDetail"
import NavBar from "../../navigation/NavBar"

class BatchDetail extends Component {

  state = {
    batch: {},
    initialized: false,
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
    starterIngredients: [],
    bottleIngredients: []
  }

  componentDidMount() {
    // Get batch ID from dynamic route
    const { batchId } = this.props.match.params
    // Use it to fetch that batch from the database and set that batch as the current batch in state and initialized so that the page will render with that batch's details instead of blank while waiting for state to be set
    APIManager.getEntry("batches", batchId, "?_expand=type")
      .then(batchObj => {
        this.setState({ batch: batchObj, initialized: true })
      })
    // Use the batch ID from route to get all ingredients associated with it, then filter all that are categorized as flavor and set them as bottleIngredients state so that they display in the Bottle Ingredients area
    APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId === 5)
      })
      .then(ingredients => {
        this.setState({ bottleIngredients: ingredients })
      })
    // Repeating the same thing with starter ingredients (anything that's not category 5 is a starter ingredient)
    APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
      .then(ingredients => {
        return ingredients.filter(i => i.ingredient.categoryId !== 5)
      })
      .then(ingredients => {
        this.setState({ starterIngredients: ingredients })
      })
  }

  // Deletes the batch and depending on what the status of the batch is, pushes the user back to the appropriate list that they came from
  handleDelete = () => {
    APIManager.deleteEntry("batches", this.state.batch.id)
      .then(() => {
        if (this.state.batch.status === 1) {
          this.props.history.push("/in-progress-list")
        } else if (this.state.batch.status === 2) {
          this.props.history.push("/in-progress-list")
        } else {
          this.props.history.push("/completed-list")
        }
      })
  }

  render() {
    if (this.state.initialized === true) {
      return (
        <React.Fragment>
          <NavBar {...this.props} />
          {
            // Renders the appropriate detail component based on what status the batch is in (brewing, bottled or completed)
            this.state.batch.status === 1 ?
            <BrewingDetail {...this.state.batch} handleDelete={this.handleDelete} {...this.props} starterIngredients={this.state.starterIngredients} />
            : this.state.batch.status === 2 ?
            <BottledDetail {...this.state.batch} {...this.props} handleDelete={this.handleDelete} {...this.props} starterIngredients={this.state.starterIngredients} bottleIngredients={this.state.bottleIngredients} />
            : this.state.batch.status === 3 ?
            <CompletedDetail {...this.state.batch} {...this.props} handleDelete={this.handleDelete} starterIngredients={this.state.starterIngredients} bottleIngredients={this.state.bottleIngredients} {...this.props} />
            : null
          }
        </React.Fragment>
      )
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}
export default BatchDetail