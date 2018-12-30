import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {

  render() {
    return (
      <nav className="nav-inline no-margin-top margin-bottom-m padding-vertical-s nav-bg color-white">
        <ul className="flex align-items-center justify-content-space-between">
          <li>
            <Link to="/" className="link font-weight-semibold">FermentStation</Link>
          </li>
          <div className="flex align-items-center">
            {/* <li>
              <button className="button button-text color-white button-l" onClick={
                () => {
                this.props.history.push("/")
              }}><i className="fas fa-home fa-2x"></i></button>
            </li> */}
            <li className="margin-left-s">
              <button className="button white-outline-btn button-l" onClick={
                () => {
                  sessionStorage.clear() || localStorage.clear()
                  this.props.history.push("/welcome")
                }}>Logout</button>
            </li>
          </div>
        </ul>
      </nav>
    )
  }
}

export default NavBar