import React, { Component } from "react"
import { Link } from "react-router-dom"


class MainMenu extends Component {

  render() {


    return (
      <div className="text-align-center">
        <h1 className="padding-vertical-s">Welcome!</h1>
        <div className="background-secondary-500 no-margin padding-vertical-l">
          <Link to="/new-batch" className="link display-title">Start a New Batch</Link>
        </div>


        <div className="background-secondary-600 no-margin padding-vertical-l flex-1-0-auto">
          <Link to="/in-progress-list" className="link display-title">In-Progress</Link>
        </div>
        <div className="background-secondary-700 no-margin padding-vertical-l flex-1-0-auto">
          <Link to="/completed-list" className="link display-title">Completed</Link>
        </div>


        <div className="background-secondary-800 no-margin padding-vertical-l">
          <button className="button-text color-white display-title" onClick={
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