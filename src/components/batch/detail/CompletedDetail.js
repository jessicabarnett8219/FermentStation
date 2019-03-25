import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

// Component Renders on Batch Detail screen if the batch is status 3
class CompletedDetail extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container padding-horizontal-m sticky-footer-clear">
          <div className="flex flex-column align-items-center">
            <h1 className="text-align-center no-margin-bottom">{this.props.name}</h1>
            <div className="title-divider margin-bottom-s"></div>
          </div>
          <p className="text-align-center font-size-xxl no-margin">{this.props.type.name}</p>
          <ul className="font-size-xl ul">
            <div className="border border-radius box-shadow-s padding-s margin-bottom-xs">
              <li className="no-margin-horizontal"><strong >Started On </strong><Moment format="MM/DD/YY">{this.props.startDate}</Moment></li>
              <li className="no-margin-horizontal"><strong>Bottled On </strong><Moment format="MM/DD/YY">{this.props.bottleDate}</Moment></li>
              <li className="no-margin"><strong>Completed On </strong><Moment format="MM/DD/YY">{this.props.completeDate}</Moment></li>
            </div>
            {/* Maps over ingredients associated with this batch that categorized as starter (any category id but 5) */}
            <div className="border border-radius box-shadow-s padding-s margin-bottom-s">
              <li className="margin-bottom-xs no-margin-horizontal"><strong>Starter Ingredients</strong>
                <ul className="font-size-xl no-bullets">
                  {
                    this.props.starterIngredients.map(i => {
                      return <li className="no-margin no-padding-horizontal" key={i.id}>{i.amount} {i.measurement} {i.ingredient.name} </li>
                    })
                  }
                </ul></li></div>
            {/* Maps over ingredients associated with this batch that categorized as starter (category 5) */}
            <div className="border border-radius box-shadow-s padding-s margin-bottom-s">
              <li className="margin-bottom-xs no-margin-horizontal"><strong>Bottle Ingredients</strong>
                <ul className="font-size-xl no-bullets">
                  {
                    this.props.bottleIngredients.map(i => {
                      return <li className="no-margin no-padding-horizontal" key={i.id}>{i.amount} {i.measurement} {i.ingredient.name}</li>
                    })
                  }
                </ul></li></div>

            <div className="border border-radius box-shadow-s padding-s margin-bottom-s">
              <li className="no-margin-horizontal"><strong>Rating </strong>{this.props.rating === "positive" ? <i className="fas fa-thumbs-up fa-lg padding-horizontal-xs color-info"></i> : this.props.rating === "negative" ? <i className="fas fa-thumbs-down fa-lg padding-horizontal-xs color-info"></i> : null}

              </li>
              <li className="no-margin-horizontal"><strong>Review</strong></li>
              <li className="no-margin-horizontal"><span className="break-word">{this.props.review}</span>
              </li>
            </div>
          </ul>
        </div>

        <div className="flex justify-content-space-around brand padding-vertical-xs margin-top-s">
          <button className="button button-text button-xl" onClick={() => {
            this.props.handleDelete()
          }}><i className="fas fa-trash white-icon"></i></button>
          <Link to={`/batches/edit/${this.props.id}`}><button className="button button-text button-xl"
          ><i className="fas fa-pen white-icon"></i></button></Link>
          <button className="button button-text color-white button-xl toolbar-button" onClick={() => {
            this.props.history.push("/completed-list")
          }}>Back to List</button>
        </div>

      </React.Fragment>
    )
  }
}

export default CompletedDetail