import React, { Component } from "react"
import { Link } from "react-router-dom"


class MainMenu extends Component {

  render() {


    return (
      <div className="text-align-center">
        <h1 className="padding-vertical-s">Welcome!</h1>
        <div className="background-secondary margin-vertical-1-4 padding-vertical-s">
          <Link to="/new-batch"><button className="button-text color-white">Start a New Batch</button></Link>
        </div>
        <div className="background-secondary margin-vertical-1-4 padding-vertical-s">
          <Link to="/in-progress-list"><button className="button-text color-white ">View In-Progress</button></Link>
        </div>
        <div className="background-secondary margin-vertical-1-4 padding-vertical-s">
          <Link to="/completed-list"><button className="button-text color-white">View Completed</button></Link>
        </div>
        <div className="background-secondary margin-vertical-1-4 padding-vertical-s">
          <button className="button-text color-white" onClick={
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