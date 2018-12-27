import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BrewingBatchesList extends Component {

  render() {
    return (
      <div className="list-item-container margin-bottom-s">
        {
          this.props.batches.map(batch => {
            return <dl className="text-align-center border border-radius padding-vertical-m padding-horizontal-l margin-bottom-s" key={batch.id}>
              <dt className=""><h3>{batch.name}</h3></dt>
              <dd className="margin-bottom-xs">{batch.type.name}</dd>
              <dd className="">Ready to Bottle: <Moment format="MM/DD/YY">{batch.bottleDate}</Moment></dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button info">Details</button></Link>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BrewingBatchesList