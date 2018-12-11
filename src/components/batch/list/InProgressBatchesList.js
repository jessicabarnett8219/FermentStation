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
        <div>
          {
            this.state.batches.map(batch => {
              if (batch.status === 1) {
                return <div key={batch.id}>
                  <h3>{batch.name}</h3>
                  <p>Brewing Since: {batch.startDate}</p>
                  <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
                </div>
              } else if (batch.status === 2) {
                return <div key={batch.id}>
                  <h3>{batch.name}</h3>
                  <p>Bottled Since: {batch.bottleDate}</p>
                  <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
                </div>
              }
            })
          }
        </div>
      </div>
    )
  }
}
export default InProgressBatchesList