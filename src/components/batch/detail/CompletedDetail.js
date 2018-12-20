import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

// Component Renders on Batch Detail screen if the batch is status 3
class CompletedDetail extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-align-center">{this.props.name}</h1>
          <dl>
            <dt>Type</dt>
            <dd>{this.props.type.name}</dd>
            <dt>Started On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
            <dt>Bottled On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
            <dt>Completed On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.completeDate}</Moment></dd>
            {/* Mapping over ingredients associated with this batch that categorized as starter (any category id but 5) */}
            <dt>Starter Ingredients </dt>
            <dd><ul>
              {
                this.props.starterIngredients.map(i => {
                  return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name} </li>
                })
              }
            </ul></dd>
            {/* Mapping over ingredients associated with this batch that categorized as starter (category 5) */}
            <dt>Bottle Ingredients</dt>
            <dd><ul>
              {
                this.props.bottleIngredients.map(i => {
                  return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name}</li>
                })
              }
            </ul></dd>

            <dt>Rating</dt>
            <dd>{this.props.rating}</dd>
            <dt>Review</dt>
            <dd>{this.props.review}</dd>
          </dl>

          <div className="flex justify-content-center">
            <Link to={`/batches/edit/${this.props.id}`}><button
              className="button button-square button-icon info margin-bottom-xs"><i className="fas fa-pen"></i></button></Link>
            <button className="button button-square button-icon info margin-bottom-xs" onClick={() => {
              this.props.handleDelete()
            }}><i className="fas fa-trash"></i></button>
            <button className="button info margin-bottom-xs" onClick={() => {
              this.props.history.push("/completed-list")
            }}>Back to List</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CompletedDetail