import React, { Component } from "react"
import { Link } from "react-router-dom"
import APIManager from "../../modules/APIManager"


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

        {/* <h3 className="text-align-center margin-vertical-m"></h3> */}

        <div className="container text-align-center font-size-xxl font-weight-semibold">
          <Link to="/new-batch" className="link">
            <div className="menu-item border-radius padding-vertical-l margin-bottom-s color-white">
              <i className="material-icons">add_circle_</i><span>Start a New Batch</span>
            </div>
          </Link>
          <Link to="/in-progress-list" className="link">
            <div className="menu-item border-radius margin-bottom-s padding-vertical-l color-white">
              <i className="material-icons padding-right-s">bubble_chart</i><span>In-Progress Batches</span>
            </div>
          </Link>

          <Link to="/completed-list" className="link">
            <div className="menu-item border-radius margin-bottom-s padding-vertical-l color-white">
              <i className="material-icons padding-right-s">check_circle</i><span>Completed Batches</span>
            </div>
          </Link>
        </div>
      </div >
    )
  }
}
export default MainMenu