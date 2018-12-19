import React, { Component } from "react"
import BatchRatingEditForm from "./BatchRatingEditForm"
import BottledEdit from "./BottledEdit"

class CompletedEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <BottledEdit handleFieldChange={this.props.handleFieldChange} handleSave={this.props.handleSave} handleFieldChangeRadio={this.props.handleFieldChangeRadio} batch={this.props.batch} {...this.props}/>
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