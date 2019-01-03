import React, { Component } from "react"
import { Link } from "react-router-dom"

class MainMenu extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="padding-vertical-l padding-horizontal-xs nav-bg color-white box-shadow-xl">
          <h1 className="logo logo-main-menu text-align-center no-margin-bottom">FermentStation</h1>
          <h2 className="font-size-l text-align-center">For the Love of Fermentation</h2>
        </div>
        <div className="container padding-horizontal-m padding-bottom-m padding-top-l sticky-footer-clear">
          <p className="text-align-center font-size-xl font-weight-semibold ">What would you like to do?</p>

          <Link to="/new-batch" className="link"><div className="text-align-center background-info box-shadow-xxl color-white border-radius padding-vertical-m flex justify-content-flex-start align-items-center margin-bottom-m main-menu-item">
            <i className="fas fa-plus fa-2x margin-horizontal-m"></i>
            <h3 className="no-margin font-size-xxl">Start a New Batch</h3>
          </div></Link>

          <Link to="/in-progress-list" className="link"><div className="text-align-center background-info color-white border-radius padding-vertical-m flex justify-content-flex-start align-items-center margin-bottom-m box-shadow-xxl main-menu-item">
            <i className="fas fa-clock fa-2x margin-horizontal-m "></i>
            <h3 className="no-margin font-size-xxl">View In Progress</h3>
          </div></Link>

          <Link to="/completed-list" className="link"><div className="text-align-center background-info color-white border-radius padding-vertical-m flex justify-content-flex-start align-items-center box-shadow-xxl main-menu-item">
            <i className="fas fa-check-circle fa-2x margin-horizontal-m "></i>
            <h3 className="no-margin font-size-xxl">View Completed</h3>
          </div></Link>
          </div>
        <div className="flex justify-content-center brand padding-vertical-s">
          <button className="button button-border color-white button-l" onClick={
            () => {
              sessionStorage.clear() || localStorage.clear()
              this.props.history.push("/welcome")
            }}>Logout</button>
        </div>



      </React.Fragment>
    )
  }
}

export default MainMenu