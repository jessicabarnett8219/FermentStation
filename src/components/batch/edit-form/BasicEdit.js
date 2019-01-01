import React, { Component } from "react"

class BasicEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className="text-align-center">Edit Batch</h1>
        <div className="margin-bottom-s">
        <strong><label className="font-size-l" htmlFor="editName">Name</label></strong>
        <input className="input-l" id="editName" type="text" defaultValue={this.props.batch.name} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />
        </div>

        <div className="margin-bottom-s">
        <strong><label className="font-size-l" htmlFor="editStartDate">Started On</label></strong>
        <input className="input-l" type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />
        </div>

        <div className="margin-bottom-s">
        <strong><label className="font-size-l" htmlFor="editBottleDate"> {
          this.props.batch.status === 1 ? "Ready to Bottle On" : "Bottled On"
        }
        </label></strong>
        <input className="input-l" type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
          (evt) => { this.props.handleFieldChange(evt) }
        } />
        </div>

      </React.Fragment>
    )
  }
}

export default BasicEdit