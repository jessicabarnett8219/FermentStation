import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';


class BrewingDetail extends Component {

  render() {
    return (
        <div className="container color-info">
        <h1 className="text-align-center">{this.props.name}</h1>
          <dl>
            <dt>Type</dt>
            <dd>{this.props.type.name}</dd>
            <dt>Started On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
            <dt>Expected Bottling Date</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
            <dt>Amount</dt>
            <dd>{`${this.props.batchAmount} ${this.props.measurement}`}</dd>
            <dt>Starter Ingredients </dt>
            <dd>{this.props.starterIngredients}</dd>
            </dl>
            <div className="flex justify-content-center">

              <Link to={`/batches/edit/${this.props.id}`}><button className="button button-square button-icon info"
              ><i className="fas fa-pen"></i></button></Link>

              <button className="button info button-square button-icon" onClick={() => {
                this.props.handleDelete()
              }}><i className="fas fa-trash"></i></button>

              <Link to={`/bottle/${this.props.id}`}><button className="button info">Bottle Batch</button></Link>
            </div>
        </div>
    )

  }

}
export default BrewingDetail