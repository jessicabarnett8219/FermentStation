import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingBatchesList from "./BrewingBatchesList"
import BottledBatchesList from "./BottledBatchesList"
import NavBar from "./../../navigation/NavBar"
import moment from "moment"

class InProgressBatchesList extends Component {

  state = {
    brewingBatches: [],
    bottledBatches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
    today: ""
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
      const getToday = () => {
        let today = new Date()
        return moment(today).format("YYYY-MM-DD")
      }
      let today = getToday()
      this.setState({today: today}, () => {
        console.log(this.state.today)
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
          <BrewingBatchesList batches={this.state.brewingBatches} today={this.state.today}/>
          {/* <h2 className="text-align-center margin-bottom-m">Bottled</h2> */}
          <BottledBatchesList batches={this.state.bottledBatches} today={this.state.today}/>
          </div>
        </div>
        </div>
    )
  }
}

export default InProgressBatchesList