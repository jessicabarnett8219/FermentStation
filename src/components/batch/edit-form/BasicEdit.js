import React, { Component } from "react"
import BatchTypeEditForm from "./BatchTypeEditForm"
import StarterIngredientEdit from "./StarterIngredientEdit";

class BasicEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className="text-align-center">Edit Batch</h1>
        <label htmlFor="editName">Name</label>
        <input id="editName" type="text" defaultValue={this.props.batch.name} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <BatchTypeEditForm batchType={this.props.batch.typeId} handleFieldChangeType={this.props.handleFieldChangeType} typeOptions={this.props.typeOptions} />

        <label htmlFor="editStartDate">Start Date</label>
        <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <label htmlFor="editBottleDate"> {
          this.props.batch.status === 1 ? "Expected Bottling Date" : "Bottled On"
        }
        </label>
        <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <StarterIngredientEdit batchId={this.props.batch.id} batchType={this.props.batch.typeId}/>
      </React.Fragment>
    )
  }
}

export default BasicEdit