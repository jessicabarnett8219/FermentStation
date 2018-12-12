import React, { Component } from "react"
import { Link } from "react-router-dom"


class MainMenu extends Component {

  render() {


    return (
      <div className="text-align-center">
        <h1 className="padding-vertical-s color-info">Welcome!</h1>
        <div className="background-info no-margin padding-vertical-l">
          <Link to="/new-batch" className="link display-title">Start a New Batch</Link>
        </div>


        <div className="background-info-600 no-margin padding-vertical-l flex-1-0-auto">
          <Link to="/in-progress-list" className="link display-title">In-Progress</Link>
        </div>
        <div className="background-info-700 no-margin padding-vertical-l flex-1-0-auto">
          <Link to="/completed-list" className="link display-title">Completed</Link>
        </div>


        <div className="background-info-800 no-margin padding-vertical-l color-white">
          <button className="button-text display-title" onClick={
            () => {
              sessionStorage.clear() || localStorage.clear()
              this.props.history.push("/welcome")
            }
          }>Logout</button>
        </div>

      </div>
    )
  }
}
export default MainMenu