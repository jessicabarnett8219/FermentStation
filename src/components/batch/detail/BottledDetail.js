import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';
import DeleteBatchButton from "./buttons/DeleteBatchButton"
import EditBatchButton from "./buttons/EditBatchButton";

class BottledDetail extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-align-center">{this.props.name}</h1>
          <dl key={this.props.id}>
            <dt>Type</dt>
            <dd>{this.props.type.name}</dd>
            <dt>Started On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
            <dt>Bottled On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
            <dt>Expected Completion Date</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.completeDate}</Moment></dd>
            <dt>Starter Ingredients </dt>
            <dd>
              <ul>
                {
                  this.props.starterIngredients.map(i => {
                    return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name} </li>
                  })
                }
              </ul>
            </dd>
            <dt>Bottle Ingredients</dt>
            <dd>
              <ul>
                {
                  this.props.bottleIngredients.map(i => {
                    return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name}</li>
                  })
                }
              </ul>
            </dd>
          </dl>

          <div className="flex justify-content-center">

            <EditBatchButton id={this.props.id} />

            <DeleteBatchButton handleDelete={this.props.handleDelete} />

            <Link to={`/review/${this.props.id}`}><button className="button info margin-bottom-xs" >Review Batch</button></Link>

            <button className="button info margin-bottom-xs" onClick={() => {
              this.props.history.push("/in-progress-list")
            }}>Back to List</button>

          </div>
        </div>
      </div>
    )

  }

}
export default BottledDetail