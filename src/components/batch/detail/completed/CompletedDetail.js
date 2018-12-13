import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class CompletedDetail extends Component {
  render() {
    return (
      <div>
      <div className="container">
      <h1 className="text-align-center">{this.props.name}</h1>
        <dl>
          <dt>Type</dt>
          <dd>{this.props.type.name}</dd>
          <dt>Started On</dt>
          <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
          <dt>Bottled On</dt>
          <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
          <dt>Completed On</dt>
          <dd><Moment format="dddd, MMMM Do YYYY">{this.props.completeDate}</Moment></dd>
          <dt>Amount</dt>
          <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
          <dt>Starter Ingredients </dt>
          <dd>{this.props.starterIngredients}</dd>
          <dt>Bottle Ingredients</dt>
          <dd>{this.props.bottleIngredients}</dd>
          <dt>Rating</dt>
          <dd>{this.props.rating}</dd>
          <dt>Review</dt>
          <dd>{this.props.review}</dd>

        </dl>
        <div className="flex justify-content-center">
        <Link to={`/batches/edit/${this.props.id}`}><button
        className="button button-square button-icon info margin-bottom-xs"><i className="fas fa-pen"></i></button></Link>

        <button className="button button-square button-icon info margin-left-s margin-bottom-xs" onClick={() => {
          this.props.handleDelete()
        }}><i className="fas fa-trash"></i></button>

        <button className="button info margin-left-s margin-bottom-xs" onClick={() => {
          if (this.props.status === 1) {
            this.props.history.push("/in-progress-list")
          } else if (this.props.status === 2) {
            this.props.history.push("/in-progress-list")
          } else {
            this.props.history.push("/completed-list")
          }
        }}>Back to List</button>
        </div>
      </div>
      </div>
    )

  }

}
export default CompletedDetail