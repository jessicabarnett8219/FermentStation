import React, { Component } from "react"
import BatchRatingEditForm from "./BatchRatingEditForm"

class CompletedEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="margin-top-s">
          <strong><label className="font-size-l" htmlFor="editCompleteDate">
            {this.props.batch.status === 3 ? "Completed On" :
              "Expected Completion Date"
            }
          </label></strong>
          <input className="input-l" type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />
        </div>

        <BatchRatingEditForm rating={this.props.batch.rating} handleFieldChangeRating={this.props.handleFieldChangeRating} />

        <div className="margin-vertical-s">
          <strong><label className="font-size-l" htmlFor="editReview">Review</label></strong>
          <textarea className="font-size-l" id="editReview" defaultValue={this.props.batch.review} type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />
        </div>
      </React.Fragment >
    )
  }
}

export default CompletedEdit