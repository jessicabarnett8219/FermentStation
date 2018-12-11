import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledDetail extends Component {

  render() {
    return (
      <dl key={this.props.id}>
        <h1>Batch Details</h1>
        <dt>Name </dt>
        <dd>{this.props.name}</dd>
        <dt>Type</dt>
        <dd>{this.props.type.name}</dd>
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

        <Link to={`/review/${this.props.id}`}><button>Review Batch</button></Link>

        <Link to={`/batches/edit/${this.props.id}`}><button
        >Edit Batch</button></Link>

        <button onClick={() => {
          this.props.handleDelete()
        }}>Delete Batch</button>

        <button onClick={() => {
          if (this.props.status === 1) {
            this.props.history.push("/in-progress-list")
          } else if (this.props.status === 2) {
            this.props.history.push("/in-progress-list")
          } else {
            this.props.history.push("/completed-list")
          }
        }}>Back to Batch List</button>

      </dl>
    )

  }

}
export default BottledDetail