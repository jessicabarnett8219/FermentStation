import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingBatchesList from "./BrewingBatchesList"
import BottledBatchesList from "./BottledBatchesList"
import NavBar from "./../../navigation/NavBar"

class InProgressBatchesList extends Component {

  state = {
    brewingBatches: [],
    bottledBatches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=1&_sort=startDate&_order=asc&_expand=type`)
      .then(usersBatches => {
        this.setState({ brewingBatches: usersBatches })
      })
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=2&_sort=startDate&_order=asc&_expand=type`)
      .then(usersBatches => {
        this.setState({ bottledBatches: usersBatches })
      })
  }

  render() {
    return (
        <div className="">
          <NavBar {...this.props}/>
          <div className="container">
          <h1 className="text-align-center">In Progress</h1>
          <div className="flex flex-column align-items-center list-container">
          {/* <h2 className="text-align-center margin-bottom-m">Now Brewing</h2> */}
          <BrewingBatchesList batches={this.state.brewingBatches} />
          {/* <h2 className="text-align-center margin-bottom-m">Bottled</h2> */}
          <BottledBatchesList batches={this.state.bottledBatches} />
          </div>
        </div>
        </div>
    )
  }
}

export default InProgressBatchesList