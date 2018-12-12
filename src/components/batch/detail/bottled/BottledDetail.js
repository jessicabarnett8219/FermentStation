import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledDetail extends Component {

  render() {
    return (
      <div>
        <h1 className="text-align-center no-margin-top padding-vertical-m background-secondary color-white">Batch Details</h1>
        <div className="container">
          <dl key={this.props.id}>
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
            <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
            <dt>Starter Ingredients </dt>
            <dd>{this.props.starterIngredients}</dd>
            <dt>Bottle Ingredients</dt>
            <dd>{this.props.bottleIngredients}</dd>

            <Link to={`/review/${this.props.id}`}><button className="button button-secondary" >Review Batch</button></Link>

            <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon button-secondary"
            ><i className="fas fa-pen"></i></button></Link>

            <button className="button button-square button-icon button-secondary" onClick={() => {
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
export default BottledDetail