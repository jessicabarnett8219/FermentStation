import React, { Component } from "react"
import BatchTypeEditForm from "../../BatchTypeEditForm";
import BatchRatingEditForm from "../../BatchRatingEditForm"

// import { Link } from "react-router-dom"

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

          <BatchTypeEditForm batchType={this.props.batch.typeId} handleFieldChangeRadio={this.props.handleFieldChangeRadio}/>

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

          <label htmlFor="editStarterIngredients">Starter Ingredients</label>
          <input id="editStarterIngredients" defaultValue={this.props.batch.starterIngredients} type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editBottleIngredients">Bottle Ingredients</label>
          <input id="editBottleIngredients" defaultValue={this.props.batch.bottleIngredients} type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <BatchRatingEditForm rating={this.props.batch.rating} handleFieldChangeRating={this.props.handleFieldChangeRating}/>

          <label htmlFor="editReview">Review</label>
          <input id="editReview" defaultValue={this.props.batch.review} type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

        </div>
        <button className="button info" onClick={() => {
          this.props.handleSave()
        }}>Save</button>

        <button className="button border-button info" onClick={() => {
          this.props.history.push(`/batches/${this.props.batch.id}`)
        }}>Cancel</button>
      </div>
    )

  }
}

export default CompletedEdit