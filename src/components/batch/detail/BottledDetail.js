import React, { Component } from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';
import DeleteBatchButton from "./buttons/DeleteBatchButton"
import EditBatchButton from "./buttons/EditBatchButton";

// Component Renders on Batch Detail screen if the batch is status 2
class BottledDetail extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container padding-horizontal-m sticky-footer-clear">
          <h1 className="text-align-center no-margin-bottom">{this.props.name}</h1>
          <p className="text-align-center font-size-l no-margin">{this.props.type.name}</p>
          <dl className="font-size-l" key={this.props.id}>
            <dt className="no-margin-bottom">Started On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.startDate}</Moment></dd>
            <dt className="no-margin-bottom">Bottled On</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.bottleDate}</Moment></dd>
            <dt className="no-margin-bottom">Expected Completion Date</dt>
            <dd><Moment format="dddd, MMMM Do YYYY">{this.props.completeDate}</Moment></dd>
            {/* Mapping over ingredients associated with this batch that categorized as starter (any category id but 5) */}
            <dt className="margin-bottom-xs">Starter Ingredients </dt>
            <dd><ul>
              {
                this.props.starterIngredients.map(i => {
                  return <li key={i.id}>{i.amount} {i.measurement} {i.ingredient.name} </li>
                })
              }
            </ul></dd>
            {/* Mapping over ingredients associated with this batch that categorized as bottle (category 5) */}
            <dt className="margin-bottom-xs">Bottle Ingredients</dt>
            <dd><ul className="font-size-l">
              {
                this.props.bottleIngredients.map(i => {
                  return <li className="no-margin-vertical no-padding" key={i.id}>{i.amount} {i.measurement} {i.ingredient.name}</li>
                })
              }
            </ul></dd>
          </dl>

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

          {/* <div className="flex flex-column align-items-center margin-top-m margin-bottom-s">
            <EditBatchButton id={this.props.id} />
            <DeleteBatchButton handleDelete={this.props.handleDelete} />
            <Link to={`/review/${this.props.id}`}><button className="button info margin-bottom-xs" >Review Batch</button></Link>
            <button className="button info margin-bottom-xs" onClick={() => {
              this.props.history.push("/in-progress-list")
            }}>Back to List</button>
          </div> */}

        </React.Fragment>
    )
  }
}
export default BottledDetail