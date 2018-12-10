import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"
import BrewingDetail from "./brewing/BrewingDetail"
import { Link } from "react-router-dom"
import BottledDetail from "./bottled/BottledDetail";
import CompletedDetail from "./complete/CompletedDetail"


class BatchDetail extends Component {

  state = {
    batch: "",
    initialized: false,
    currentUser: "",
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    const currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId }, () => {
      APIManager.getEntry("batches", batchId, "?_expand=type")
        .then(batchObj => {
          this.setState({ batch: batchObj }, () => this.setState({ initialized: true }, () => console.log(this.state)))
        })
    })

  }

  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <div>
            <BrewingDetail name={this.state.batch.name} type={this.state.batch.type.name} startDate={this.state.batch.startDate} starterIngredients={this.state.batch.starterIngredients} batchId={this.state.batch.id} bottleDate={this.state.batch.bottleDate} amount={this.state.batch.batchAmount} measurement={this.state.batch.measurement}/>
            <Link to={`/batches/edit/${this.state.batch.id}`} batch={this.state.batch}><Button
            >Edit Batch</Button></Link>
            <Grid.Row>
              <Button>Delete Batch</Button>
            </Grid.Row>
          </div>
        )
      } else if (this.state.batch.status === 2) {
        return (
          <div>
            <BottledDetail name={this.state.batch.name} type={this.state.batch.type.name} bottleDate={this.state.batch.bottleDate} starterIngredients={this.state.batch.starterIngredients} bottleIngredients={this.state.batch.bottleIngredients} startDate={this.state.batch.startDate} batchId={this.state.batch.id} completeDate={this.state.batch.completeDate} amount={this.state.batch.batchAmount} measurement={this.state.batch.measurement}/>

            <Grid.Row>
              <Link to={`/batches/edit/${this.state.batch.id}`}><Button
              >Edit Batch</Button></Link>
            </Grid.Row>
            <Grid.Row>
              <Button>Delete Batch</Button>
            </Grid.Row>
          </div>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
          <div>
            <CompletedDetail name={this.state.batch.name} type={this.state.batch.type.name} completeDate={this.state.batch.completeDate} startDate={this.state.batch.startDate} bottleDate={this.state.batch.bottleDate} starterIngredients={this.state.batch.starterIngredients} bottleIngredients={this.state.batch.bottleIngredients} batchId={this.state.batch.id} rating={this.state.batch.rating} review={this.state.batch.review} amount={this.state.batch.batchAmount} measurement={this.state.batch.measurement}/>
            <Grid.Row>
              <Link to={`/batches/edit/${this.state.batch.id}`}><Button
              >Edit Batch</Button></Link>
            </Grid.Row>
            <Grid.Row>
              <Button>Delete Batch</Button>
            </Grid.Row>
          </div>
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