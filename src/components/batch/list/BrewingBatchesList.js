import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BrewingBatchesList extends Component {
  render() {
    return (
      <div className="list-item-container margin-bottom-s">
        {
          this.props.batches.map(batch => {
            return <dl className="text-align-center border box-shadow-m border-radius padding-m margin-bottom-s" key={batch.id}>
              <dt className=""><h2>{batch.name}</h2></dt>
              <dd className="font-size-xl">
                {batch.bottleDate === this.props.today ? <span><i className="fas fa-bell fa-lg margin-right-xs"></i>Ready to Bottle Today</span> : <span>Ready to ottle <Moment fromNow>{batch.bottleDate}</Moment></span>
                }
              </dd>
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button button-l info">Details</button></Link>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BrewingBatchesList