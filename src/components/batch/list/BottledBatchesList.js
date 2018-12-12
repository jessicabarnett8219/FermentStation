import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledBatchesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.batches.map(batch => {
            return <dl key={batch.id}>
              <dt>{batch.name}</dt>
              <dd>Bottled Since: {batch.bottleDate}</dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button button-secondary button-xs">Details</button></Link>
              <hr></hr>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BottledBatchesList