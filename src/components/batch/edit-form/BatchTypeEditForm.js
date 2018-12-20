import React, { Component } from "react"

class BatchTypeEditForm extends Component {

  render() {
    if (this.props.batchType === 1) {
      return (
        <div>
          <input type="radio" name="editType" value={2}  onChange={(evt) => {
            this.props.handleFieldChangeRadio(evt)
          }} />Water Kefir <br></br>
          <input type="radio" name="editType" value={1} defaultChecked onChange={(evt) => {
            this.props.handleFieldChangeRadio(evt)
          }} />Kombucha <br></br>
        </div>
      )
    } else {
      return (
        <div>
          <input type="radio" name="editType" value={2} defaultChecked onChange={(evt) => {
            this.props.handleFieldChangeRadio(evt)
          }} />Water Kefir <br></br>
          <input type="radio" name="editType" value={1} onChange={(evt) => {
            this.props.handleFieldChangeRadio(evt)
          }} />Kombucha <br></br>
        </div>
      )
    }
  }
}

export default BatchTypeEditForm