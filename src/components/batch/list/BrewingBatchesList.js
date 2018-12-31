import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BrewingBatchesList extends Component {
  render() {
    return (
      <div className="list-item-container margin-bottom-s">
        {
          this.props.batches.map(batch => {
            return <dl className="text-align-center border box-shadow-m border-radius padding-m margin-bottom-s background-white" key={batch.id}>
              <dt className=""><h2>{batch.name}</h2></dt>
              <dd className="no-margin-vertical font-size-xl">{batch.type.name}</dd>
              <dd className="font-size-l">
                <span>ready to bottle </span>
                {batch.bottleDate === this.props.today ? <p><i className="fas fa-bell fa-2x"></i></p> : <Moment fromNow>{batch.bottleDate}</Moment>
                }
              </dd>
              {/* <dd className="">Ready to Bottle: <Moment fromNow>{batch.bottleDate}</Moment></dd> */}
              <Link to={`/batches/${batch.id}`} {...this.props}><button className="button button-l info">Details</button></Link>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BrewingBatchesList