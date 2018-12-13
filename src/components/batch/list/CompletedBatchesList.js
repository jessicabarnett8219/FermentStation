import React, { Component } from "react"
import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"
import Moment from 'react-moment';
import NavBar from "./../../navigation/NavBar"



class PastBatchesList extends Component {

  state = {
    batches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=3&_sort=completeDate&_order=desc`)
      .then(batches =>
        this.setState({ batches: batches }))
  }

  render() {
    return (
      <div>
        <NavBar {...this.props}/>
        <div className="container">
        <h1 className="text-align-center margin-bottom-m">Completed Batches</h1>
          {
            this.state.batches.map(batch => {
              return <dl key={batch.id}>
                <dt>{batch.name}</dt>
                <dd>Completed: <Moment format="MM/DD/YY">{batch.completeDate}</Moment></dd>
                <Link to={`/batches/${batch.id}`} {...this.props}><button className="button info button-xs">Details</button></Link>
                <hr></hr>
              </dl>
            })
          }
        </div>
      </div>
    )
  }
}
export default PastBatchesList