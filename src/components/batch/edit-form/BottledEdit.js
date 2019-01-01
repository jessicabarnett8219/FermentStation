import React, { Component } from "react"

class BottledEdit extends Component {

  render() {
    return (
        <div className="margin-bottom-s">
          <strong><label className="font-size-l" htmlFor="editCompleteDate">
          {this.props.batch.status === 3 ? "Completed On" :
          "Ready to Drink"
          }
          </label></strong>
          <input className="input-l" type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />
          </div>
    )
  }
}

export default BottledEdit