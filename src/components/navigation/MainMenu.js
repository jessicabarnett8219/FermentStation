import React, { Component } from "react"
import { Link } from "react-router-dom"


class MainMenu extends Component {

  render() {


    return (
      <div>
        <nav className="nav-inline no-margin-top margin-bottom-s padding-vertical-s background-info color-white">
          <ul className="flex align-items-center justify-content-space-between">
            <li>FermentStation</li>
            <li>
              <button className="button button-border color-white button-s" onClick={
                () => {
                  sessionStorage.clear() || localStorage.clear()
                  this.props.history.push("/welcome")
                }}>Logout</button>
            </li>
          </ul>
        </nav>

        <h3 className="text-align-center margin-vertical-m">Welcome, Jessica!</h3>
        <div className="container text-align-center font-size-xxl font-weight-semibold">
          <div className="menu-item border-radius padding-vertical-l margin-bottom-s color-white">
            <i className="material-icons">add_circle_</i><span>Start a New Batch</span>
          </div>

          <div className="menu-item border-radius margin-bottom-s padding-vertical-l color-white">
            <i class="material-icons padding-right-s">bubble_chart</i><span>In-Progress Batches</span>
          </div>
          <div className="menu-item border-radius margin-bottom-s padding-vertical-l color-white">
            <i class="material-icons padding-right-s">check_circle</i><span>Completed Batches</span>
          </div>
        </div>

        {/* <Link to="/new-batch" className="display-title">
          Start a New Batch
        </Link>

        <Link to="/in-progress-list" className="display-title">
            In-Progress Batches
        </Link>

        <Link to="/completed-list" className="display-title">
            Past Batches
        </Link> */}

      </div >
    )
  }
}
export default MainMenu