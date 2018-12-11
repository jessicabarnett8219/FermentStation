import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

class ReviewForm extends Component {
  state = {
    batch: "",
    batchId: "",
    completeDate: "",
    review: "",
    rating: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({ batchId: batchId })
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batch: batch,
          bottleDate: batch.bottleDate
        })
      })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructCompletedBatch = () => {
    let completedBatch = {
      rating: this.state.rating,
      review: this.state.review,
      completeDate: this.state.completeDate,
      status: 3,
    }
    return completedBatch
  }

  handleSave = () => {
    let completedBatch = this.constructCompletedBatch()
    APIManager.editEntry("batches", this.state.batchId, completedBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batchId}`)
      })

  }
  handleFieldChangeRadio = (evt) => {
    let targetValue = evt.target.value
    this.setState({ rating: targetValue })
  }

  render() {
    return (
      <div>
          <h1>Review {this.state.batchName}</h1>
          <h4>Bottled Since: {this.state.bottleDate}</h4>
          <div>
          <label htmlFor="completeDate">Completion Date</label>
            <input type="date" id="completeDate" onChange={(evt) => {
              this.handleFieldChange(evt)
            }} />

            <input type="radio" name="rating" value="positive" defaultChecked onChange={(evt) => {
              this.handleFieldChangeRadio(evt)
            }} />Positive <br></br>
            <input type="radio" name="rating" value="negative" onChange={(evt) => {
              this.handleFieldChangeRadio(evt)
            }} />Negative <br></br>

            <label htmlFor="review">Review</label>
            <input type="text" id="review" onChange={(evt) => {
              this.handleFieldChange(evt)
            }} />
            <button onClick={
              () => {
                this.props.history.push(`/batches/${this.state.batchId}`)
              }
            }>Cancel</button>
            <button onClick={() => {
              this.handleSave()
            }}>Save</button>
          </div>
      </div>
    )
  }
}
export default ReviewForm