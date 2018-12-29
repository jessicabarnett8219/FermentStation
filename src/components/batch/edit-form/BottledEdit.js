import React, { Component } from "react"
import StarterIngredientEdit from "./StarterIngredientEdit"
import BottleIngredientEdit from "./BottleIngredientEdit"

class BottledEdit extends Component {

  render() {
    return (
      <React.Fragment>
          <label htmlFor="editCompleteDate">
          {this.props.batch.status === 3 ? "Completed On" :
          "Expected Completion Date"
          }
          </label>
          <input type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

      </React.Fragment>
    )
  }
}

export default BottledEdit