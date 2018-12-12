import React, { Component } from "react"
import BatchTypeEditForm from "../../BatchTypeEditForm";

// import { Link } from "react-router-dom"

// TODO fix radio pre-population

class BottledEdit extends Component {

  render() {
    return (
      <div >
        <h1 className="text-align-center no-margin-top padding-vertical-m background-secondary color-white">Edit Batch</h1>
        <div className="container">
          <label htmlFor="editName">Name</label>
          <input id="editName" type="text" defaultValue={this.props.batch.name} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />
          <BatchTypeEditForm batchType={this.props.batch.typeId} />
          <label htmlFor="editStartDate">Start Date</label>
          <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editBottleDate">Bottling Date</label>
          <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editCompleteDate">Expected Completion Date</label>
          <input type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label>Amount</label>
          <input id="editAmount" type="text" defaultValue={this.props.batch.batchAmount} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <select id="editMeasurement" defaultValue={this.props.batch.measurement} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } >
            <option value="cups">Cups</option>
            <option value="ounces">Ounces</option>
          </select>

          <input id="editStarterIngredients" defaultValue={this.props.batch.starterIngredients} label="Starter Ingredients" type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <input id="editBottleIngredients" defaultValue={this.props.batch.bottleIngredients} label="Bottle Ingredients" type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <button className="button button-secondary" onClick={() => {
            this.props.handleSave()
          }}>Save</button>

          <button className="button button-border button-secondary" onClick={() => {
            this.props.history.push(`/batches/${this.props.batch.id}`)
          }}>
            Cancel</button>
        </div>
      </div>
    )

  }
}

export default BottledEdit