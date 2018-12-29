import React, { Component } from "react"
import BatchRatingEditForm from "./BatchRatingEditForm"

class CompletedEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <strong><label htmlFor="editCompleteDate">
          {this.props.batch.status === 3 ? "Completed On" :
            "Expected Completion Date"
          }
        </label></strong>

        <input type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <BatchRatingEditForm rating={this.props.batch.rating} handleFieldChangeRating={this.props.handleFieldChangeRating} />

        <label htmlFor="editReview">Review</label>
        <textarea id="editReview" defaultValue={this.props.batch.review} type="text" onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

      </React.Fragment >
    )
  }
}

export default CompletedEdit