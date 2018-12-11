import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {

  render() {
    return (
      <nav className="nav-inline nav-container">
        <ul className="nav-subcontainer">
          <li className="nav-item">
            <Link to="/"><button className="button button-text">HOME</button></Link>
          </li>
          <li className="nav-item">
            <button className="button button-text" onClick={() => {
              sessionStorage.clear() || localStorage.clear()
              this.props.history.push("/welcome")
            }}>LOGOUT</button>
          </li>
        </ul>
      </nav>
    )
  }
}
export default NavBar



