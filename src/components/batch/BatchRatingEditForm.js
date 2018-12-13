import React, { Component } from "react"

class BatchRatingEditForm extends Component {

  render() {
    if (this.props.rating === "positive") {
      return (
        <div className="margin-vertical-m text-align-center">
          <input type="radio" name="editRating" value="negative" onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-down fa-2x"></i>

          <input type="radio" name="editRating" value="positive" defaultChecked onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-up fa-2x"></i><br></br>
        </div>
      )
    } else {
      return (
        <div className="margin-vertical-m text-align-center">
          <input type="radio" name="editRating" defaultChecked value="negative" onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-down fa-2x"></i>
          <input type="radio" name="editRating" value="positive" onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-up fa-2x"></i><br></br>
        </div>
      )
    }

  }
}

export default BatchRatingEditForm
