import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import NavBar from "../../navigation/NavBar"
import Moment from "react-moment"


class BottleForm extends Component {

  state = {
    batch: "",
    bottleDate: "",
    completeDate: "",
    bottleIngredients: "",
    batchId: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    this.setState({ batchId: batchId })
    APIManager.getEntry("batches", batchId)
      .then(batch => {
        this.setState({
          batch: batch
        })
      })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructBottledBatch = (evt) => {
    const bottledBatch = {
      bottleDate: this.state.bottleDate,
      completeDate: this.state.completeDate,
      bottleIngredients: this.state.bottleIngredients,
      status: 2
    }
    return bottledBatch
  }


  handleSave = () => {
    let bottledBatch = this.constructBottledBatch()
    APIManager.editEntry("batches", this.state.batchId, bottledBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batchId}`)
      })

  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container color-info">
        <h1 className="text-align-center">Bottle Batch</h1>
          <h3 className="text-align-center">{this.state.batch.name}</h3>
          <h4 className="text-align-center">Started On: <Moment format="dddd, MMMM Do YYYY">{this.state.batch.startDate}</Moment></h4>
          <label htmlFor="bottleDate">Bottle Date</label>
          <input type="date" id="bottleDate" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />
          <label htmlFor="completeDate">Expected Completion Date</label>
          <input type="date" id="completeDate" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />
          <label htmlFor="bottleIngredients">Bottle Ingredients</label>
          <textArea type="text" placeholder="Bottle Ingredients" id="bottleIngredients" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />

          <div className="flex justify-content-center">
            <button className="button info button-border margin-top-xxs" onClick={
              () => {
                this.props.history.push(`/batches/${this.state.batchId}`)
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
export default BottleForm