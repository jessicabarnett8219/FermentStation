import React, { Component } from "react"
// import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"
import BrewingBatchesList from "./BrewingBatchesList"
import BottledBatchesList from "./BottledBatchesList"
import NavBar from "./../../navigation/NavBar"

class InProgressBatchesList extends Component {
  state = {
    brewingBatches: [],
    bottledBatches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=1&_sort=startDate&_order=asc`)
      .then(usersBatches => {
        this.setState({ brewingBatches: usersBatches })
      })
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=2&_sort=startDate&_order=asc`)
      .then(usersBatches => {
        this.setState({ bottledBatches: usersBatches })
      })
  }

  render() {
    return (

        <div>
          <NavBar />
          <div className="container color-info">
          <h2 className="text-align-center margin-bottom-m">Now Brewing</h2>
          <BrewingBatchesList batches={this.state.brewingBatches} />
          <h2 className="text-align-center margin-bottom-m">Bottled</h2>
          <BottledBatchesList batches={this.state.bottledBatches} />
        </div>
        </div>
    )
  }
}
export default InProgressBatchesList