import React, { Component } from "react"

class SaveEditBtn extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="button info button-xxl color-white sticky-button" onClick={() => {
          if (this.props.startDate === "" || this.props.bottleDate === "" || this.props.completeDate === "") {
            alert("Date fields should not be left blank")
          } else {
            this.props.handleSave()
          }
        }}>Save</button>
      </React.Fragment>
    )
  }
}

export default SaveEditBtn