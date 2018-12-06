import React, { Component } from "react"
import { Link } from "react-router-dom"

class MainMenu extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Wally!</h1>
        <ul>
          <li>
            <Link to="/new-batch">Start a New Batch</Link>
          </li>
          <li>
            <Link to="/brewing-batches">Now Brewing Batches</Link>
          </li>
          <li>
            <Link to="/bottled-batches">Bottled Batches</Link>
          </li>
          <li>
            <Link to="/past-batches">Past Batches</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default MainMenu