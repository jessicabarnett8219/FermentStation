import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';

class BrewingDetail extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">{this.props.name}</h1>
        <dl>
          <dt>Type</dt>
          <dd>{this.props.type.name}</dd>
          <dt>Started On</dt>
          <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
          <dt>Expected Bottling Date</dt>
          <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
          <dt>Starter Ingredients </dt>
          <dd><ul>
              {
                this.props.starterIngredients.map(i => {
                  return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name} </li>
                })
              }
            </ul></dd>
        </dl>
        <div className="flex justify-content-center">

          <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon info margin-bottom-xs"
          ><i className="fas fa-pen"></i></button></Link>

          <button className="button info button-square button-icon" onClick={() => {
            this.props.handleDelete()
          }}><i className="fas fa-trash"></i></button>

          <Link to={`/bottle/${this.props.id}`}><button className="button info">Bottle Batch</button></Link>

          <button className="button info margin-bottom-xs" onClick={() => {
            this.props.history.push("/in-progress-list")
          }}>Back to List</button>
        </div>
      </div>
    )
  }
}
export default BrewingDetail