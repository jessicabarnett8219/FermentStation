import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingBatchesList from "./BrewingBatchesList"
import BottledBatchesList from "./BottledBatchesList"
import NavBar from "../../navigation/NavBar"
import moment from "moment"

class InProgressBatchesList extends Component {

  state = {
    brewingBatches: [],
    bottledBatches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
    today: ""
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=1&_sort=bottleDate&_order=asc&_expand=type`)
      .then(usersBatches => {
        this.setState({ brewingBatches: usersBatches })
      })
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=2&_sort=completeDate&_order=asc&_expand=type`)
      .then(usersBatches => {
        this.setState({ bottledBatches: usersBatches })
      })
    const getToday = () => {
      let today = new Date()
      return moment(today).format("YYYY-MM-DD")
    }
    let today = getToday()
    this.setState({ today: today }, () => {
    })
  }

  render() {
    return (
      <div className="">
        <NavBar {...this.props} />
        <div className="container">
          <div className="flex flex-column align-items-center">
            <h1 className="text-align-center no-margin-bottom">In Progress</h1>
            <div className="title-divider margin-bottom-m"></div>
            <BrewingBatchesList batches={this.state.brewingBatches} today={this.state.today} {...this.props}/>
            <BottledBatchesList batches={this.state.bottledBatches} today={this.state.today} {...this.props}/>
          </div>
        </div>
      </div>
    )
  }
}

export default InProgressBatchesList