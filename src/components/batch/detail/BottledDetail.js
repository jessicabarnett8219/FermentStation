import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

// Component Renders on Batch Detail screen if the batch is status 2
class BottledDetail extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container padding-horizontal-m sticky-footer-clear">
          <div className="sticky-footer-clear">
            <h1 className="text-align-center no-margin-bottom">{this.props.name}</h1>
            <p className="text-align-center font-size-l no-margin">{this.props.type.name}</p>
            <ul className="font-size-l ul" key={this.props.id}>
              <li className="no-margin-horizontal"><strong>Started: </strong><Moment format="MM/DD/YY">{this.props.startDate}</Moment></li>
              <li className="no-margin-horizontal"><strong>Bottled: </strong><Moment format="MM/DD/YY">{this.props.bottleDate}</Moment></li>
              <li className="no-margin-horizontal"><strong>Ready to Drink: </strong><Moment format="MM/DD/YY">{this.props.completeDate}</Moment></li>
              {/* Mapping over ingredients associated with this batch that categorized as starter (any category id but 5) */}
              <li className="margin-bottom-xs no-margin-horizontal"><strong>Starter Ingredients</strong>
                <ul>
                  {
                    this.props.starterIngredients.map(i => {
                      return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name} </li>
                    })
                  }
                </ul></li>
              {/* Mapping over ingredients associated with this batch that categorized as bottle (category 5) */}
              <li className="margin-bottom-xs no-margin-horizontal"><strong>Bottle Ingredients</strong>
                <ul className="font-size-l">
                  {
                    this.props.bottleIngredients.map(i => {
                      return <li className="no-margin-vertical no-padding" key={i.id}>{i.amount} {i.measurement} {i.ingredient.name}</li>
                    })
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-content-center margin-bottom-l margin-horizontal-m">
          <button className="button info button-xxl color-white sticky-button" onClick={() => {
            this.props.history.push(`/review/${this.props.id}`)
          }}>Review Batch</button>
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
export default BottledDetail