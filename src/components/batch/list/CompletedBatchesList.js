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
        {
          this.state.batches.map(batch => {
            return <div key={batch.id}>
              <h3>{batch.name}</h3>
              <p>Completed On: {batch.completeDate}</p>
              <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
            </div>
          })
        }
      </div>
    )
  }
}
export default PastBatchesList