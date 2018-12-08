import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"


class EditBatch extends Component {

  state = {
    batch: "",
    initialized: false,
    currentUser: "",
    editName: "",
    editStartDate: "",
    editBottleDate: "",
    editCompleteDate: "",
    editStarterIngredients: "",
    editBottleIngredients: "",
    editReview: ""
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
    return(
      <div>
        <h1>Edit Page</h1>
      </div>
    )
    // if (this.state.initialized === true) {
    //   if (this.state.batch.status === 1) {
    //     return (
    //       <div>
    //       <BrewingDetail name={this.state.batch.name} type={this.state.batch.type.name} startDate={this.state.batch.startDate} starterIngredients={this.state.batch.starterIngredients} batchId={this.state.batch.id} bottleDate={this.state.batch.bottleDate} />
    //       <Grid.Row>
    //         <Button>Edit Batch</Button>
    //       </Grid.Row>
    //       <Grid.Row>
    //         <Button>Delete Batch</Button>
    //       </Grid.Row>
    //       </div>
    //     )
    //   } else if (this.state.batch.status === 2) {
    //     return (
    //       <div>
    //       <BottledDetail name={this.state.batch.name} type={this.state.batch.type.name} bottleDate={this.state.batch.bottleDate} starterIngredients={this.state.batch.starterIngredients} bottleIngredients={this.state.batch.bottleIngredients} startDate={this.state.batch.startDate} batchId={this.state.batch.id} completeDate={this.state.batch.completeDate} />

    //       <Grid.Row>
    //         <Button>Edit Batch</Button>
    //       </Grid.Row>
    //       <Grid.Row>
    //         <Button>Delete Batch</Button>
    //       </Grid.Row>
    //       </div>
    //     )
    //   }
    //   else if (this.state.batch.status === 3) {
    //     return (
    //       <div>
    //       <CompletedDetail name={this.state.batch.name} type={this.state.batch.type.name} completeDate={this.state.batch.completeDate} startDate={this.state.batch.startDate} bottleDate={this.state.batch.bottleDate} starterIngredients={this.state.batch.starterIngredients} bottleIngredients={this.state.batch.bottleIngredients} batchId={this.state.batch.id} rating={this.state.batch.rating} review={this.state.batch.review} />
    //       <Grid.Row>
    //         <Button>Edit Batch</Button>
    //       </Grid.Row>
    //       <Grid.Row>
    //         <Button>Delete Batch</Button>
    //       </Grid.Row>
    //       </div>
    //     )
    //   }
    // }
    // else {
    //   return (
    //     <div>
    //     </div>
    //   )
    // }
  }





}


export default EditBatch