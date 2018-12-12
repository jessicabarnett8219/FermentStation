import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingDetail from "./brewing/BrewingDetail"
// import { Link } from "react-router-dom"
import BottledDetail from "./bottled/BottledDetail";
import CompletedDetail from "./completed/CompletedDetail"


class BatchDetail extends Component {

  state = {
    batch: {},
    initialized: false,
    currentUser: "",
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    const currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId }, () => {
      APIManager.getEntry("batches", batchId, "?_expand=type")
        .then(batchObj => {
          this.setState({ batch: batchObj, initialized: true})
        })
    })
  }

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
      if (this.state.batch.status === 1) {
        return (
            <BrewingDetail {...this.state.batch} handleDelete={this.handleDelete} {...this.props}/>
        )
      } else if (this.state.batch.status === 2) {
        return (
            <BottledDetail {...this.state.batch} {...this.props} handleDelete={this.handleDelete} {...this.props}/>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
            <CompletedDetail {...this.state.batch} {...this.props} handleDelete={this.handleDelete} {...this.props}/>
        )
      }
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