import React, { Component } from "react"
// import { Link } from "react-router-dom"

class CompletedDetail extends Component {

  render() {
    return (
      <dl>
        <h1>Batch Details</h1>
        <dt>Name </dt>
        <dd>{this.props.batch.name}</dd>
        <dt>Type</dt>
        <dd>{this.props.batch.type}</dd>
        <dt>Started On</dt>
        <dd>{this.props.batch.startDate}</dd>
        <dt>Bottled On</dt>
        <dd>{this.props.batch.bottleDate}</dd>
        <dt>Completed On</dt>
        <dd>{this.props.batch.completeDate}</dd>
        <dt>Amount</dt>
        <dd>{`${this.props.batch.amount} ${this.props.batch.measurement}`}</dd>
        <dt>Starter Ingredients </dt>
        <dd>{this.props.batch.starterIngredients}</dd>
        <dt>Bottle Ingredients</dt>
        <dd>{this.props.batch.bottleIngredients}</dd>
      </dl>
    )

  }

}
export default CompletedDetail