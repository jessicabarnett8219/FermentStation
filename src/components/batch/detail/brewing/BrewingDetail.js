import React, { Component } from "react"
import { Link } from "react-router-dom"

class BrewingDetail extends Component {

  render() {
    return (
      <div>
        <h1>Batch Details</h1>
        <h4>Name{this.props.name}</h4>
        <h4>Type{this.props.type}</h4>
        <h4>Brewing Since{this.props.startDate}</h4>
        <h4>Expected Bottle Date{this.props.bottleDate}</h4>
        <h4>Starter Ingredients{this.props.starterIngredients}</h4>
        <h4>Amount{`${this.props.amount} ${this.props.measurement}`}</h4>
        <Link to={`/bottle/${this.props.batchId}`}><button>Bottle Batch</button></Link>
      </div>
    )

  }

}
export default BrewingDetail