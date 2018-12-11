import React, { Component } from "react"
import { Link } from "react-router-dom"


class ListItem extends Component {
  render() {
    return (
      <div>
        <Link to={`/batches/${this.props.id}`}><button>Details</button></Link>
        <h4>Name {this.props.name}</h4>
        <h4>Brewing Since {this.props.startDate}</h4>
      </div>
    )

  }
}
export default ListItem