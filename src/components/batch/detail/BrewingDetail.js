import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

// Component Renders on Batch Detail screen if the batch is status 1
class BrewingDetail extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container padding-horizontal-m sticky-footer-clear">

          <h1 className="text-align-center no-margin-bottom">{this.props.name}</h1>
          <p className="text-align-center font-size-l no-margin">{this.props.type.name}</p>


          <ul className="font-size-l ul">
            <li className="no-margin-horizontal"><strong>Started: </strong><Moment format="MM/DD/YY">{this.props.startDate}</Moment></li>
            <li className="no-margin"><strong>Ready to Bottle: </strong><Moment format="MM/DD/YY">{this.props.bottleDate}</Moment></li>
            <li className="margin-bottom-xs no-margin-horizontal"><strong>Starter Ingredients:</strong>
            {/* Mapping over ingredients associated with this batch that categorized as starter (any category id but 5) */}
            <ul className="font-size-l">
              {
                this.props.starterIngredients.map(i => {
                  return <li key={i.id} className="no-margin-vertical no-padding">{i.amount} {i.measurement} {i.ingredient.name} </li>
                })
              }
            </ul>
            </li>

          </ul>
          <div className="flex flex-column align-items-center margin-top-m margin-bottom-s">
            <Link to={`/bottle/${this.props.id}`}><button className="button button-xl info color-white">Bottle Batch</button></Link>
          </div>
        </div>
        <div className="flex justify-content-space-around brand padding-vertical-xs">
          <button className="button button-text" onClick={() => {
            this.props.handleDelete()
          }}><i className="fas fa-trash white-icon"></i></button>
          <Link to={`/batches/edit/${this.props.id}`}><button className="button button-text"
          ><i className="fas fa-pen white-icon"></i></button></Link>
          <button className="button button-text color-white" onClick={() => {
            this.props.history.push("/in-progress-list")
          }}>Back to List</button>
        </div>
      </React.Fragment>
    )
  }
}

export default BrewingDetail