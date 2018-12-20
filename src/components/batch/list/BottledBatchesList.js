import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BottledBatchesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.batches.map(batch => {
            return <dl key={batch.id}>
              <dt>{batch.name}</dt>
              <dd>{batch.type.name}</dd>
              <dd>Expected Completion: <Moment format="MM/DD/YY">{batch.completeDate}</Moment></dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button info button-xs">Details</button></Link>
              <hr></hr>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BottledBatchesList