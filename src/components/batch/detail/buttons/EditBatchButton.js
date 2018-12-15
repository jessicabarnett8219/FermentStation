import React, { Component } from "react"
import { Link } from "react-router-dom"

class EditBatchButton extends Component {
  render () {
    return (
      <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon info margin-bottom-xs"
      ><i className="fas fa-pen"></i></button></Link>
    )
  }
}
export default EditBatchButton