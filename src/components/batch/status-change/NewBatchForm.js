import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import moment from "moment"

class NewBatchForm extends Component {

  state = {
    currentUser: "",
    name: "",
    startDate: "",
    expBottlingDate: "",
    type: 2,
    batchId: ""
  }

  componentDidMount() {
    const getToday = () => {
      let today = new Date()
      return moment(today, "YYYY-MM-DD")
    }
    let today = getToday()
    let currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId, startDate: today, expBottlingDate: today })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleFieldChangeRadio = (evt) => {
    let targetValue = evt.target.value
    this.setState({ type: +targetValue })
  }

  constructNewBatch = () => {
    let newBatch = {
      name: this.state.name,
      userId: this.state.currentUser,
      typeId: this.state.type,
      rating: "",
      review: "",
      startDate: this.state.startDate,
      bottleDate: this.state.expBottlingDate,
      completeDate: "",
      status: 1
    }
    return newBatch
  }

  handleSave = () => {
    let newBatch = this.constructNewBatch()
    APIManager.addEntry("batches", newBatch)
      .then((newBatch) => {
        return newBatch.id
      })
      .then((batchId) => {
        this.props.history.push(`/ingredients/${batchId}`)
      })

  }

  render() {
    return (
      <React.Fragment>
        <NavBar {...this.props} />
        <div className="container padding-horizontal-m sticky-footer-clear">
          <h1 className="text-align-center">Start a New Batch</h1>
          <strong><label className="font-size-l" htmlFor="name">Name</label></strong>
          <input id="name" type="text" placeholder="name" className="margin-bottom-s input-xl" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <strong><label htmlFor="startDate" className="font-size-l">Start Date</label></strong>
          <input id="startDate" type="date" defaultValue={this.state.startDate} className="margin-bottom-s input-xl" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <strong><label htmlFor="expBottlingDate" className="font-size-l">Ready to Bottle On </label></strong>
          <input id="expBottlingDate" type="date" className="margin-bottom-s input-xl" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <div>
            <label className="control control-inline radio info margin-bottom-l">
              <input type="radio" name="type" defaultChecked value={2} onChange={(evt) => {
                this.handleFieldChangeRadio(evt)
              }} />
              <span className="control-indicator"></span>
              <span className="control-label font-size-l">Water Kefir</span>
            </label>
            <label className="control control-inline radio info">
              <input type="radio" name="type" value={1} onChange={(evt) => {
                this.handleFieldChangeRadio(evt)
              }} />
              <span className="control-indicator"></span>
              <span className="control-label font-size-l">Kombucha</span>
            </label>
          </div>
        </div>

        <div className="flex margin-vertical-s margin-horizontal-m">
          <button className="button info button-xxl color-white sticky-button" onClick={() => {
            this.handleSave()
          }}>Next</button>
        </div>
      </React.Fragment>
    )
  }
}

export default NewBatchForm