import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BottledBatchesList extends Component {
  render() {
    return (
      <div className="list-item-container margin-bottom-s">
        {
          this.props.batches.map(batch => {
            return <dl className="text-align-center border box-shadow-m border-radius padding-m margin-bottom-s" key={batch.id}>
              <dt><h2>{batch.name}</h2></dt>
              <dd className="font-size-xl">
                {batch.completeDate === this.props.today ? <span><i className="fas fa-bell fa-lg margin-right-xs"></i>Ready to drink today</span> :
                  <span>Ready to drink <Moment fromNow>{batch.completeDate}</Moment></span>
                }
              </dd>
              <Link to={`/batches/${batch.id}`}><button className="button button-l info box-shadow-xxl">Details</button></Link>
            </dl>
          })
        }
      </div>
    )
  }
}

export default BottledBatchesList