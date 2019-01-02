import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import Moment from "react-moment"
import moment from "moment"

class ReviewForm extends Component {

  state = {
    batch: "",
    batchId: "",
    completeDate: "",
    review: "",
    rating: "positive"
  }

  componentDidMount() {
    const getToday = () => {
      let today = new Date()
      return moment(today, "YYYY-MM-DD")
    }
    let today = getToday()
    const { batchId } = this.props.match.params
    this.setState({ batchId: batchId })
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batch: batch,
          completeDate: today
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
      <React.Fragment>
        <NavBar {...this.props} />
        <div className="container padding-horizontal-m sticky-footer-clear">
          <div className="flex flex-column align-items-center">
            <h1 className="text-align-center no-margin-bottom">Review a Batch</h1>
            <div className="title-divider margin-bottom-m"></div>
          </div>
          <h3 className="text-align-center no-margin font-size-xxl">{this.state.batch.name}</h3>
          <p className="text-align-center no-margin-top font-size-xl">Bottled <Moment fromNow>{this.state.batch.bottleDate}</Moment></p>
          <strong><label htmlFor="completeDate" className="font-size-l">Completed On</label></strong>
          <input type="date" id="completeDate" className="input-l" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />

          <div className="margin-vertical-m text-align-center border border-radius box-shadow-s padding-vertical-m">
            <input type="radio" name="rating" value="negative" onChange={(evt) => {
              this.handleFieldChangeRadio(evt)
            }} /><i className="fas fa-thumbs-down fa-2x margin-right-m color-info"></i>

            <input type="radio" name="rating" value="positive" defaultChecked onChange={(evt) => {
              this.handleFieldChangeRadio(evt)
            }} /><i className="fas fa-thumbs-up fa-2x color-info"></i><br></br>
          </div>

          <strong><label htmlFor="review" className="font-size-l">Review</label></strong>
          <textarea type="text" placeholder="review" id="review" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />

        </div>
        <div className="flex margin-vertical-s margin-horizontal-m">
          <button className="button info button-xxl color-white sticky-button box-shadow-xxl" onClick={() => {
            if (this.props.completeDate === "") {
              alert("Date fields should not be left blank")
            } else {
              this.handleSave()
            }
          }}>Save</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ReviewForm