import React, { Component } from "react"
import { Grid, Button, Header, Item, List } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"



class BatchDetail extends Component {

  state = {
    batchName: "",
    startDate:"",
    bottleDate: "",
    completeDate: "",
    type: "",
    status: "",
    ingredients: ""
  }


  componentDidMount () {
    const {batchId} = this.props.match.params
    APIManager.getEntry("batches", batchId)
    .then(batch => this.setState({
      batchName: batch.name,
      startDate: batch.startDate,
      type: batch.type,
      ingredients: batch.ingredients
    }))
  }

  render() {

    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Batch Details</Header>
          <List>
            <List.Item>
              <List.Content ><Header size="medium">Name</Header>{this.state.batchName}</List.Content>
            </List.Item>

            <List.Item>
              <List.Content><Header size="medium">Type</Header>{this.state.type}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content><Header size="medium">Brewing Since</Header>{this.state.startDate}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content><Header size="medium">Ingredients</Header>{this.state.ingredients}</List.Content>
            </List.Item>
          </List>
          <Button fluid>Bottle Batch</Button>
          <Button fluid>Edit Batch</Button>
          <Button fluid>Delete Batch</Button>
        </Grid.Column>
      </Grid>
    )
  }
}
export default BatchDetail