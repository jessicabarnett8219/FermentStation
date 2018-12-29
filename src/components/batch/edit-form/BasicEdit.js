import React, { Component } from "react"

class BasicEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className="text-align-center">Edit Batch</h1>
        <strong><label htmlFor="editName">Name</label></strong>
        <input id="editName" type="text" defaultValue={this.props.batch.name} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <strong><label htmlFor="editStartDate">Started On</label></strong>
        <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

        <strong><label htmlFor="editBottleDate"> {
          this.props.batch.status === 1 ? "Ready to Bottle On" : "Bottled On"
        }
        </label></strong>
        <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />

      </React.Fragment>
    )
  }
}

export default BasicEdit