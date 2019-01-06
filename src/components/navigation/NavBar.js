import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {

  render() {
    return (
      <nav className="nav-inline no-margin-top margin-bottom-m padding-vertical-s nav-bg color-white box-shadow-xl">
        <ul className="flex align-items-center justify-content-space-between">
          <li>
           <Link to="/" className="link logo font-size-xxl">FermentStation</Link>
          </li>
          <div className="flex align-items-center">
            <li className="margin-left-s">
              <button className="button white-outline-btn button-l logout-button-nav" onClick={
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