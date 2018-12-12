import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BottledDetail extends Component {

  render() {
    return (
      <div>
        <h1 className="text-align-center no-margin-top padding-vertical-m background-info color-white">Batch Details</h1>
        <div className="container color-info">
          <dl key={this.props.id}>
            <dt>Name </dt>
            <dd>{this.props.name}</dd>
            <dt>Type</dt>
            <dd>{this.props.type.name}</dd>
            <dt>Started On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
            <dt>Bottled Since</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
            <dt>Expected Completion Date</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.completeDate}</Moment></dd>
            <dt>Amount</dt>
            <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
            <dt>Starter Ingredients </dt>
            <dd>{this.props.starterIngredients}</dd>
            <dt>Bottle Ingredients</dt>
            <dd>{this.props.bottleIngredients}</dd>

            <div className="flex justify-content-center">
              <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon info"
              ><i className="fas fa-pen"></i></button></Link>

              <button className="button button-square button-icon info" onClick={() => {
                this.props.handleDelete()
              }}><i className="fas fa-trash"></i></button>
              <Link to={`/review/${this.props.id}`}><button className="button info" >Review Batch</button></Link>
            </div>

            {/* <button className="button button-secondary" onClick={() => {
          if (this.props.status === 1) {
            this.props.history.push("/in-progress-list")
          } else if (this.props.status === 2) {
            this.props.history.push("/in-progress-list")
          } else {
            this.props.history.push("/completed-list")
          }
        }}>Back to List</button> */}

          </dl>
        </div>
      </div>
    )

  }

}
export default BottledDetail