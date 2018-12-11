import React, { Component } from "react"
import { Link } from "react-router-dom"

class CompletedDetail extends Component {
  render() {
    return (
      <div>
        <h1 className="text-align-center padding-vertical-m no-margin">Batch Details</h1>
      <div className="container">
        <dl>
          <dt className="display-inline-block">Name </dt>
          <dd>{this.props.name}</dd>
          <dt>Type</dt>
          <dd>{this.props.type.name}</dd>
          <dt>Started On</dt>
          <dd>{this.props.startDate}</dd>
          <dt>Bottled On</dt>
          <dd>{this.props.bottleDate}</dd>
          <dt>Completed On</dt>
          <dd>{this.props.completeDate}</dd>
          <dt>Amount</dt>
          <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
          <dt>Starter Ingredients </dt>
          <dd>{this.props.starterIngredients}</dd>
          <dt>Bottle Ingredients</dt>
          <dd>{this.props.bottleIngredients}</dd>
        </dl>
        <Link to={`/batches/edit/${this.props.id}`}><button
        className="button button-square button-icon info"><i className="fas fa-pen"></i></button></Link>

        <button className="button button-square button-icon info" onClick={() => {
          this.props.handleDelete()
        }}><i className="fas fa-trash"></i></button>

        {/* <button onClick={() => {
          if (this.props.status === 1) {
            this.props.history.push("/in-progress-list")
          } else if (this.props.status === 2) {
            this.props.history.push("/in-progress-list")
          } else {
            this.props.history.push("/completed-list")
          }
        }}>Back to Batch List</button> */}
      </div>
      </div>
    )

  }

}
export default CompletedDetail