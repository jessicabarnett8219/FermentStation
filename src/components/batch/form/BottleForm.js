import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"

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
        <h1>Bottle {this.state.batchName}</h1>
        <h4>Brewing Since: {this.state.batch.startDate}</h4>
        <div>
          <label htmlFor="bottleDate">Bottle Date</label>
          <input type="date" id="bottleDate" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />
          <label htmlFor="completeDate">Expected Completion Date</label>
          <input type="date" id="completeDate" onChange={(evt) => {
            this.handleFieldChange(evt)
          }} />
          <label htmlFor="bottleIngredients">Bottle Ingredients</label>
          <input type="text" id="bottleIngredients" onChange={(evt) => {
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
export default BottleForm