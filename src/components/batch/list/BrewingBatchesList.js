import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BrewingBatchesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.batches.map(batch => {
            return <dl key={batch.id}>
              <dt>{batch.name}</dt>
              <dd>Bottled Since: <Moment format="MMMM Do, YYYY">{batch.startDate}</Moment></dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button info button-xs">Details</button></Link>
              <hr></hr>
            </dl>
          })
        }
      </div>
    )
  }





}

export default BrewingBatchesList