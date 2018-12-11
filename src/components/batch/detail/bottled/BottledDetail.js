import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledDetail extends Component {

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
        <dt>Bottled Since</dt>
        <dd>{this.props.bottleDate}</dd>
        <dt>Expected Completion Date</dt>
        <dd>{this.props.completeDate}</dd>
        <dt>Amount</dt>
        <dd>{`${this.props.amount} ${this.props.measurement}`}</dd>
        <dt>Starter Ingredients </dt>
        <dd>{this.props.starterIngredients}</dd>
        <dt>Bottle Ingredients</dt>
        <dd>{this.props.bottleIngredients}</dd>

        <Link to={`/review/${this.props.batchId}`}><button>Review Batch</button></Link>

      </dl>
    )

  }

}
export default BottledDetail