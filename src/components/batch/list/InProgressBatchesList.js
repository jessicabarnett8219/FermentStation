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
        <ul>
          {
            this.state.batches.map(batch => {
              if (batch.status === 1) {
                return <li key={batch.id}>
                  <h4>{batch.name}</h4>
                  <h4>Brewing Since: {batch.startDate}</h4>
                  <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>

                </li>
              } else if (batch.status === 2) {
                return <li key={batch.id}>
                  <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
                  <h4>{batch.name}</h4>
                  <h4>Bottled Since: {batch.bottleDate}</h4>
                </li>
              }
            })
          }
        </ul>
      </div>
    )
  }
}
export default InProgressBatchesList