import React, { Component } from "react"
import { Link } from "react-router-dom"


class MainMenu extends Component {

  render() {
    return (
      <div className="content-container">
        <h1>Welcome</h1>
        <Link to="/new-batch"><button className="large-btn info">Start a New Batch</button></Link>
        <Link to="/in-progress-list"><button className="large-btn info">View In-Progress</button></Link>
        <Link to="/completed-list"><button className="large-btn info">View Completed</button></Link>
        <button className="large-btn info" onClick={
          () => {
            sessionStorage.clear() || localStorage.clear()
            this.props.history.push("/welcome")
          }
        }>Logout</button>

      </div>
    )
  }
}
export default MainMenu