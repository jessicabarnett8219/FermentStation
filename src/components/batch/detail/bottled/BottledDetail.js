import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledDetail extends Component {

  render() {
    return (
      <dl key={this.props.batch.id}>
        <h1>Batch Details</h1>
        <dt>Name </dt>
        <dd>{this.props.batch.name}</dd>
        <dt>Type</dt>
        <dd>{this.props.batch.type}</dd>
        <dt>Started On</dt>
        <dd>{this.props.batch.startDate}</dd>
        <dt>Bottled Since</dt>
        <dd>{this.props.batch.bottleDate}</dd>
        <dt>Expected Completion Date</dt>
        <dd>{this.props.batch.completeDate}</dd>
        <dt>Amount</dt>
        <dd>{`${this.props.batch.amount} ${this.props.batch.measurement}`}</dd>
        <dt>Starter Ingredients </dt>
        <dd>{this.props.batch.starterIngredients}</dd>
        <dt>Bottle Ingredients</dt>
        <dd>{this.props.batch.bottleIngredients}</dd>

        <Link to={`/review/${this.props.batch.id}`}><button>Review Batch</button></Link>

      </dl>
    )

  }

}
export default BottledDetail