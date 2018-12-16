import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"

class NewBatchForm extends Component {

  state = {
    currentUser: "",
    name: "",
    startDate: "",
    expBottlingDate: "",
    type: 2,
    batchAmount: "",
    measurement: "cups",
    dateToday: "",
    ingredients: "",
    batchId: ""
  }

  componentDidMount() {
    let currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId })
    let today = new Date()
    this.setState({ dateToday: today })
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
      batchAmount: this.state.batchAmount,
      measurement: this.state.measurement,
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
      <div>
        <NavBar {...this.props} />
        <div className="container">
          <h1 className="text-align-center">Start a New Batch</h1>

          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="name" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="date" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <label htmlFor="expBottlingDate">Expected Bottling Date</label>
          <input id="expBottlingDate" type="date" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />


          <input type="radio" name="type" value={2} onChange={(evt) => {
                  this.handleFieldChangeRadio(evt)
                }}/> Water Kefir <br></br>
            <input type="radio" name="type" value={1} onChange={(evt) => {
                  this.handleFieldChangeRadio(evt)
                }}/> Kombucha <br></br>


          <label htmlFor="batchAmount">Amount</label>
          <input id="batchAmount" type="text" placeholder="Amount (number)" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <label className="select" htmlFor="measurement">
            <select id="measurement" name="measurement" onChange={
              (evt) => { this.handleFieldChange(evt) }
            }><option value="cups">cups</option>
              <option value="ounces">ounces</option>
            </select>
          </label>

          <div className="flex justify-content-center margin-bottom-s">
            <button className="button info button-border margin-top-xxs" onClick={
              () => {
                this.props.history.push("/")
              }
            }>Cancel</button>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              if (this.state.startDate === "" || this.state.expBottlingDate === "") {
                alert("Date fields should not be blank")
              } else {
                this.handleSave()
              }

            }}>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}
export default NewBatchForm