import React, { Component } from "react"
import { Link } from "react-router-dom"

class BrewingDetail extends Component {

  render() {
    console.log(this.props)
    return (
      <dl key={this.props.id}>
        <h1>Batch Details</h1>
        <dt>Name </dt>
        <dd>{this.props.name}</dd>
        <dt>Type</dt>
        <dd>{this.props.type.name}</dd>
        <dt>Started On</dt>
        <dd>{this.props.startDate}</dd>
        <dt>Expected Bottling Date</dt>
        <dd>{this.props.bottleDate}</dd>
        <dt>Amount</dt>
        <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
        <dt>Starter Ingredients </dt>
        <dd>{this.props.starterIngredients}</dd>
        <Link to={`/bottle/${this.props.id}`}><button className="button info">Bottle Batch</button></Link>

        <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon info"
        ><i className="fas fa-pen"></i></button></Link>

        <button className="button info button-square button-icon" onClick={() => {
          this.props.handleDelete()
        }}><i className="fas fa-trash"></i></button>

        {/* <button className="button info" onClick={() => {
          if (this.props.status === 1) {
            this.props.history.push("/in-progress-list")
          } else if (this.props.status === 2) {
            this.props.history.push("/in-progress-list")
          } else {
            this.props.history.push("/completed-list")
          }
        }}>Back to List</button> */}
      </dl>
    )

  }

}
export default BrewingDetail