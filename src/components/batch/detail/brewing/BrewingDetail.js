import React, { Component } from "react"
import { Link } from "react-router-dom"

class BrewingDetail extends Component {

  render() {
    return (
      <dl>
        <h1>Batch Details</h1>
        <dt>Name </dt>
        <dd>{this.props.name}</dd>
        <dt>Type</dt>
        <dd>{this.props.type}</dd>
        <dt>Started On</dt>
        <dd>{this.props.startDate}</dd>
        <dt>Expected Bottling Date</dt>
        <dd>{this.props.bottleDate}</dd>
        <dt>Amount</dt>
        <dd>{`${this.props.amount} ${this.props.measurement}`}</dd>
        <dt>Starter Ingredients </dt>
        <dd>{this.props.starterIngredients}</dd>
        <Link to={`/bottle/${this.props.batchId}`}><button>Bottle Batch</button></Link>
      </dl>
    )

  }

}
export default BrewingDetail