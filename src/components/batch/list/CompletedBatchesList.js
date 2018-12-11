import React, { Component } from "react"
import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"


class PastBatchesList extends Component {

  state = {
    batches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=3`)
      .then(batches =>
        this.setState({ batches: batches }))
  }

  render() {
    return (
      <div>
        <h1>Completed Batches</h1>
        <ul>
          {
            this.state.batches.map(batch => {
              return <li key={batch.id}>
                <h4>{batch.name}</h4>
                <h4>Completed On: {batch.completeDate}</h4>
                <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default PastBatchesList