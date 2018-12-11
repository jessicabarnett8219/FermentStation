import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledBatchesList extends Component {
  render() {
    return (
      <div>
        <h3>Bottled</h3>
        {
          this.props.batches.map(batch => {
            return <dl key={batch.id}>
              <dt>{batch.name}</dt>
              <dd>Bottled Since: {batch.bottleDate}</dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button>Details</button></Link>
              <hr></hr>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BottledBatchesList