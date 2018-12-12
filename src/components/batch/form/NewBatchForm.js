import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
// import NavBar from "../../navigation/NavBar"
// TODO have radio buttons and amount options dynamically populate from the database

class NewBatchForm extends Component {

  state = {
    currentUser: "",
    name: "",
    startDate: "",
    expBottlingDate: "",
    type: 2,
    starterIngredients: "",
    batchAmount: "",
    measurement: "cups"
  }

  componentDidMount() {
    let currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId })
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
      status: 1,
      starterIngredients: this.state.starterIngredients,
      bottleIngredients: ""
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
        this.props.history.push(`/batches/${batchId}`)
      })

  }

  render() {
    return (
      <div>
        <h1 className="text-align-center no-margin-top padding-vertical-m background-secondary color-white">Start a New Batch</h1>
        <div className="container">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={
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

          <input type="radio" name="type" value={2} defaultChecked onChange={(evt) => {
            this.handleFieldChangeRadio(evt)
          }} />Water Kefir <br></br>
          <input type="radio" name="type" value={1} onChange={(evt) => {
            this.handleFieldChangeRadio(evt)
          }} />Kombucha <br></br>

          <label htmlFor="batchAmount">Amount</label>
          <input id="batchAmount" type="text" placeholder="enter a number" onClick={
            (evt) => { this.handleFieldChange(evt) }
          } />
          <label class="select" for="measurement">
          <select id="measurement" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } >
            <option value="cups">Cups</option>
            <option value="ounces">Ounces</option>
          </select>
          </label>

          <label htmlFor="starterIngredients">Starter Ingredients</label>
          <input id="starterIngredients" type="text" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />


          <button className="button button-secondary button-border" onClick={
            () => {
              this.props.history.push("/")
            }
          }>Cancel</button>
          <button className="button button-secondary" onClick={() => {
            this.handleSave()
          }}>Save</button>
        </div>
      </div>
    )
  }
}
export default NewBatchForm