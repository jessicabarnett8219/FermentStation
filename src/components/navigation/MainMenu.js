import React, { Component } from "react"
import { Link } from "react-router-dom"

class MainMenu extends Component {

  render() {
    return (
      <div>
        <h1>Welcome</h1>

          <Link to="/new-batch"><button className="MainMenu-btn">Start a New Batch</button></Link>
          <Link to="/in-progress-list"><button >View In-Progress</button></Link>
          <Link to="/completed-list"><button >View Completed</button></Link>
          <button onClick={
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