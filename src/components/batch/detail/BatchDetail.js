import React, { Component } from "react"
// import { Grid, Button, Header, List } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"
import BrewingDetail from "./BrewingDetail"
// import { Link } from "react-router-dom"
import BottledDetail from "./BottledDetail";
import CompletedDetail from "./CompletedDetail"


class BatchDetail extends Component {

  state = {
    batch: "",
    initialized: false
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    APIManager.getEntry("batches", batchId)
      .then(batchObj => {
        this.setState({ batch: batchObj }, () => this.setState({ initialized: true }, () => console.log(this.state)))
      })
  }

  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <BrewingDetail name={this.state.batch.name} type={this.state.batch.typeId} startDate={this.state.batch.startDate} starterIngredients={this.state.batch.starterIngredients} batchId={this.state.batch.id} bottleDate={this.state.batch.bottleDate}/>
        )
      } else if (this.state.batch.status === 2) {
        return (
          <BottledDetail name={this.state.batch.name} type={this.state.batch.typeId} bottleDate={this.state.batch.bottleDate} starterIngredients={this.state.batch.starterIngredients} bottleIngredients={this.state.batch.bottleIngredients} startDate={this.state.batch.startDate}batchId={this.state.batch.id} completeDate={this.state.batch.completeDate}/>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
          <CompletedDetail name={this.state.batch.name} type={this.state.batch.typeId} completeDate={this.state.batch.completeDate} startDate={this.state.batch.startDate} bottleDate={this.state.batch.bottleDate} starterIngredients={this.state.batch.starterIngredients} bottleIngredients={this.state.batch.bottleIngredients} batchId={this.state.batch.id} rating={this.state.batch.rating} review={this.state.batch.review}/>
        )
      }
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}
export default BatchDetail