import React, { Component } from "react"
import { Link } from "react-router-dom"

class BrewingBatchesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.batches.map(batch => {
            return <dl key={batch.id}>
              <dt>{batch.name}</dt>
              <dd>Brewing Since: {batch.startDate}</dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button button-secondary button-xs">Details</button></Link>
              <hr></hr>
            </dl>
          })
        }
      </div>
    )
  }





}

export default BrewingBatchesList