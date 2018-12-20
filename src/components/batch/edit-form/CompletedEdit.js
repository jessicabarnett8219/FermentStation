import React, { Component } from "react"
import BatchRatingEditForm from "./BatchRatingEditForm"
import StarterIngredientEdit from "./StarterIngredientEdit"
import BottleIngredientEdit from "./BottleIngredientEdit"

class CompletedEdit extends Component {

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

        <BatchRatingEditForm rating={this.props.batch.rating} handleFieldChangeRating={this.props.handleFieldChangeRating} />

        <label htmlFor="editReview">Review</label>
        <textarea id="editReview" defaultValue={this.props.batch.review} type="text" onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <StarterIngredientEdit batchId={this.props.batch.id} batchType={this.props.batch.typeId}/>
        <BottleIngredientEdit batchId={this.props.batch.id} batchType={this.props.batch.typeId}/>

      </React.Fragment >
    )
  }
}

export default CompletedEdit