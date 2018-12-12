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
    measurement: "",
    typeOptions: [],
  }

  componentDidMount() {
    let currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId })
    APIManager.getAllEntries("types")
      .then((types) => {
        this.setState({
          typeOptions: types
        })
      })
    APIManager.getAllEntries("measurements")
      .then((measurements) => {
        this.setState({
          measurementOptions: measurements
        })
      })
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
        <h1 className="text-align-center no-margin-top padding-vertical-m background-info color-white">Start a New Batch</h1>
        <div className="container color-info">
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

          {
            this.state.typeOptions.map(option => {
              return <div key={option.id}>
                <input type="radio" name="type" value={option.id} onChange={(evt) => {
                  this.handleFieldChangeRadio(evt)
                }} />{option.name}<br></br>
              </div>
            })
          }

          <label htmlFor="batchAmount">Amount</label>
          <input id="batchAmount" type="text" placeholder="enter a number" onClick={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <label className="select" htmlFor="measurement">
            <select id="measurement" name="measurement" onChange={
              (evt) => { this.handleFieldChange(evt) }
            }><option value="cups">cups</option>
            <option value="ounces">ounces</option>
            </select>
          </label>

          <label htmlFor="starterIngredients">Starter Ingredients</label>
          <input id="starterIngredients" type="text" onChange={
            (evt) => { this.handleFieldChange(evt) }
          } />

          <div className="flex justify-content-center">
            <button className="button info button-border margin-top-xxs" onClick={
              () => {
                this.props.history.push("/")
              }
            }>Cancel</button>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              this.handleSave()
            }}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}
export default NewBatchForm