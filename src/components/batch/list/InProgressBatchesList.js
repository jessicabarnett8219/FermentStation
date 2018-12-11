import React, { Component } from "react"
// import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"
import BrewingBatchesList from "./BrewingBatchesList"
import BottledBatchesList from "./BottledBatchesList"

class InProgressBatchesList extends Component {
  state = {
    brewingBatches: [],
    bottledBatches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=1&_sort=startDate&_order=asc`)
      .then(usersBatches => {
        this.setState({brewingBatches: usersBatches})
      })
      APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=2&_sort=startDate&_order=asc`)
      .then(usersBatches => {
        this.setState({bottledBatches: usersBatches})
      })
  }

  render() {
    return (
      <div>
        <h1>In-Progress Batches</h1>
        <BrewingBatchesList batches={this.state.brewingBatches}/>
        <BottledBatchesList batches={this.state.bottledBatches}/>
      </div>
    )
  }
}
export default InProgressBatchesList