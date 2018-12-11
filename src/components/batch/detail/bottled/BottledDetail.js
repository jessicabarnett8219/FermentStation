import React, { Component } from "react"
import { Link } from "react-router-dom"

class BottledDetail extends Component {

  render() {
    return (
      <div>
          <h1>Batch Details</h1>

              <h4>Name {this.props.name}</h4>

              <h4>Type {this.props.type}</h4>

              <h4>Started On {this.props.startDate}</h4>

              <h4>Bottled Since {this.props.bottleDate}</h4>

              <h4>Expected Completion Date {this.props.completeDate}</h4>

              <h4>Amount {`${this.props.amount} ${this.props.measurement}`}</h4>

              <h4>Starter Ingredients {this.props.starterIngredients}</h4>

              <h4>Bottle Ingredients {this.props.bottleIngredients}</h4>

            <Link to={`/review/${this.props.batchId}`}><button>Review Batch</button></Link>

      </div>
    )

  }

}
export default BottledDetail