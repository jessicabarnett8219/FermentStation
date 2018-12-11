import React, { Component } from "react"
import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"

class InProgressBatchesList extends Component {
  state = {
    batches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}`)
      .then(usersBatches => {
        return usersBatches.filter(batch => batch.status === 1 || batch.status === 2)
      })
      .then((filteredBatches) => this.setState({ batches: filteredBatches }))
  }

  render() {
    return (
      <div>
        <h1>In-Progress Batches</h1>
          {
            this.state.batches.map(batch => {
              if (batch.status === 1) {
                return <dl key={batch.id}>
                  <dt>{batch.name}</dt>
                  <dd>Brewing Since: {batch.startDate}</dd>
                  <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
                  <hr></hr>
                </dl>
              } else if (batch.status === 2) {
                return <dl key={batch.id}>
                  <dt>{batch.name}</dt>
                  <dd>Bottled Since: {batch.bottleDate}</dd>
                  <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
                  <hr></hr>
                </dl>
              }
            })
          }
      </div>
    )
  }
}
export default InProgressBatchesList