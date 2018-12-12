import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';


class BrewingDetail extends Component {

  render() {
    return (
      <div>
        <h1 className="text-align-center no-margin-top padding-vertical-m background-secondary color-white">Batch Details</h1>
        <div className="container">
          <dl>
            <dt>Name </dt>
            <dd>{this.props.name}</dd>
            <dt>Type</dt>
            <dd>{this.props.type.name}</dd>
            <dt>Started On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
            <dt>Expected Bottling Date</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
            <dt>Amount</dt>
            <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
            <dt>Starter Ingredients </dt>
            <dd>{this.props.starterIngredients}</dd>
            <Link to={`/bottle/${this.props.id}`}><button className="button button-secondary">Bottle Batch</button></Link>

            <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon button-secondary"
            ><i className="fas fa-pen"></i></button></Link>

            <button className="button button-secondary button-square button-icon" onClick={() => {
              this.props.handleDelete()
            }}><i className="fas fa-trash"></i></button>

            <button className="button button-secondary" onClick={() => {
          if (this.props.status === 1) {
            this.props.history.push("/in-progress-list")
          } else if (this.props.status === 2) {
            this.props.history.push("/in-progress-list")
          } else {
            this.props.history.push("/completed-list")
          }
        }}>Back to List</button>
          </dl>
        </div>
      </div>
    )

  }

}
export default BrewingDetail