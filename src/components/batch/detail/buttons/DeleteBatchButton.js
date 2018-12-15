import React, { Component } from "react"

class DeleteBatchButton extends Component {
  render () {
    return (
      <button className="button button-square button-icon info margin-bottom-xs" onClick={() => {
        this.props.handleDelete()
      }}><i className="fas fa-trash"></i></button>
    )
  }
}
export default DeleteBatchButton