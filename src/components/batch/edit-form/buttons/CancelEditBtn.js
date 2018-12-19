import React, { Component } from "react"

class CancelEditBtn extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="button info button-border margin-top-xxs" onClick={() => {
          this.props.history.push(`/batches/${this.props.batch.id}`)
        }}>Cancel</button>
      </React.Fragment>
    )
  }
}

export default CancelEditBtn