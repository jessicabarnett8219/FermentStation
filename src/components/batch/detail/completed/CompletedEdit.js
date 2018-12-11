import React, { Component } from "react"
// import { Link } from "react-router-dom"

// TODO fix radio pre-population

class CompletedEdit extends Component {


  render() {
    return (
      <div>
        <h1>Edit Batch</h1>
        <div>
          <label htmlFor="editName">Name</label>
          <input id="editName" type="text" defaultValue={this.props.batch.name} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <div>
            <input type="radio" name="editType" value={2} onChange={(evt) => {
              this.props.handleFieldChangeRadio(evt)
            }} />Water Kefir <br></br>
            <input type="radio" name="editType" value={1} onChange={(evt) => {
              this.props.handleFieldChangeRadio(evt)
            }} />Kombucha <br></br>
          </div>

          <label htmlFor="editStartDate">Start Date</label>
          <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editBottleDate">Bottled Date</label>
          <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editCompleteDate">Completion Date</label>
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

          <input id="editStarterIngredients" defaultValue={this.props.batch.starterIngredients} placeholder="Starter Ingredients" type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <input id="editBottleIngredients" defaultValue={this.props.batch.bottleIngredients} placeholder="Bottle Ingredients" type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <div>
            <input type="radio" name="positive" value="positive" onChange={(evt) => {
              this.props.handleFieldChangeRating(evt)
            }} />positive <br></br>
            <input type="radio" name="negative" value="negative" onChange={(evt) => {
              this.props.handleFieldChangeRating(evt)
            }} />negative <br></br>
          </div>

          <label htmlFor="editReview">Review</label>
          <input id="editReview" defaultValue={this.props.batch.review} type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

        </div>
        <button onClick={() => {
          this.props.handleSave()
        }}>Save</button>
        <button>Cancel</button>
      </div>
    )

  }
}

export default CompletedEdit