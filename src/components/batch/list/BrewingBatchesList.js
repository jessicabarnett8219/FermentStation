import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';
import moment from "moment"

class BrewingBatchesList extends Component {
  render() {


    return (
      <div className="list-item-container margin-bottom-s">
        {
          this.props.batches.map(batch => {
            return <dl className="text-align-center border border-radius padding-vertical-m padding-horizontal-l margin-bottom-s" key={batch.id}>
              <dt className=""><h3>{batch.name}</h3></dt>
              <dd className="no-margin-bottom">{batch.type.name}</dd>
              <dd>
                <span>Ready to Bottle </span>
                {batch.bottleDate === this.props.today ? <p><i className="fas fa-bell fa-2x"></i></p> : <Moment fromNow>{batch.bottleDate}</Moment>
                }
              </dd>
              {/* <dd className="">Ready to Bottle: <Moment fromNow>{batch.bottleDate}</Moment></dd> */}
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button info">Details</button></Link>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BrewingBatchesList