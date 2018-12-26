import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BottledBatchesList extends Component {
  render() {
    return (
      <div className="list-item-container margin-bottom-s">
        {
          this.props.batches.map(batch => {
            return <dl className="text-align-center border border-radius padding-vertical-m padding-horizontal-l margin-bottom-s" key={batch.id}>
              <dt><h3>{batch.name}</h3></dt>
              <dd>{batch.type.name}</dd>
              <dd>Ready to Drink On: <Moment format="MM/DD/YY">{batch.completeDate}</Moment></dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button info">Details</button></Link>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BottledBatchesList